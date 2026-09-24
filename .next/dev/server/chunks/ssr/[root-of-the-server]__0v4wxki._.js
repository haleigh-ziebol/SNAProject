module.exports = [
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/sna-app/service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$nextjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/node_modules/@prisma/composer/dist/nextjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sna-app/node_modules/@prisma/composer-prisma-cloud/dist/index.mjs [app-rsc] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '@prisma/composer-prisma-cloud/orm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/composer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("sna-app/service.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: true
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compute"])({
    name: "app",
    deps: {
        database: postgres(__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appContract"])
    },
    build: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$nextjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        module: __TURBOPACK__import$2e$meta__.url,
        appDir: "."
    })
});
}),
"[project]/sna-app/src/prisma/composer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appContract",
    ()=>appContract
]);
(()=>{
    const e = new Error("Cannot find module '@prisma/composer-prisma-cloud/orm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$generated$2f$contract$2e$json$2e5b$json$5d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/generated/contract.json.[json].mjs [app-rsc] (ecmascript)");
;
;
const appContract = dataContract(__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$generated$2f$contract$2e$json$2e5b$json$5d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}),
"[project]/sna-app/src/prisma/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "connectDatabase",
    ()=>connectDatabase,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sna-app/node_modules/@prisma/orm-postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f$temporal$2d$polyfill$2f$global$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/node_modules/temporal-polyfill/global.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$generated$2f$contract$2e$json$2e5b$json$5d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/generated/contract.json.[json].mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function loadComposerDatabase() {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].load().database.client;
    } catch  {
        return undefined;
    }
}
const db = loadComposerDatabase() ?? (process.env.DATABASE_URL ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$generated$2f$contract$2e$json$2e5b$json$5d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    url: process.env.DATABASE_URL
}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$generated$2f$contract$2e$json$2e5b$json$5d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
}));
let connection;
function connectDatabase() {
    connection ??= db.connect().then(()=>undefined).catch((error)=>{
        connection = undefined;
        throw error;
    });
    return connection;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/sna-app/src/prisma/generated/contract.json.[json].mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
"use turbopack no side effects";
const __TURBOPACK__default__export__ = {
    "schemaVersion": "1",
    "targetFamily": "sql",
    "target": "postgres",
    "profileHash": "3916f444a8a17ad749191acf9e08dad97d1a327b88c2f1d45d12f240296aa8b2",
    "roots": {
        "Plant": {
            "model": "Plant",
            "namespace": "public"
        },
        "SNA": {
            "model": "SNA",
            "namespace": "public"
        },
        "SNAPlant": {
            "model": "SNAPlant",
            "namespace": "public"
        }
    },
    "domain": {
        "namespaces": {
            "public": {
                "models": {
                    "Plant": {
                        "fields": {
                            "commonName": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "createdAt": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "kind": "scalar"
                                }
                            },
                            "duration": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "family": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "growthHabit": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "id": {
                                "nullable": false,
                                "type": {
                                    "codecId": "sql/char@1",
                                    "kind": "scalar",
                                    "typeParams": {
                                        "length": 36
                                    }
                                }
                            },
                            "oldScientificNames": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "scientificName": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "status": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "taxonId": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "updatedAt": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "kind": "scalar"
                                }
                            },
                            "usdaCode": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            }
                        },
                        "relations": {
                            "snas": {
                                "cardinality": "N:M",
                                "on": {
                                    "localFields": [
                                        "id"
                                    ],
                                    "targetFields": [
                                        "plantId"
                                    ]
                                },
                                "through": {
                                    "childColumns": [
                                        "snaId"
                                    ],
                                    "namespaceId": "public",
                                    "parentColumns": [
                                        "plantId"
                                    ],
                                    "table": "SNAPlant",
                                    "targetColumns": [
                                        "id"
                                    ]
                                },
                                "to": {
                                    "model": "SNA",
                                    "namespace": "public"
                                }
                            }
                        },
                        "storage": {
                            "fields": {
                                "commonName": {
                                    "column": "commonName"
                                },
                                "createdAt": {
                                    "column": "createdAt"
                                },
                                "duration": {
                                    "column": "duration"
                                },
                                "family": {
                                    "column": "family"
                                },
                                "growthHabit": {
                                    "column": "growthHabit"
                                },
                                "id": {
                                    "column": "id"
                                },
                                "oldScientificNames": {
                                    "column": "oldScientificNames"
                                },
                                "scientificName": {
                                    "column": "scientificName"
                                },
                                "status": {
                                    "column": "status"
                                },
                                "taxonId": {
                                    "column": "taxonId"
                                },
                                "updatedAt": {
                                    "column": "updatedAt"
                                },
                                "usdaCode": {
                                    "column": "usdaCode"
                                }
                            },
                            "namespaceId": "public",
                            "table": "Plant"
                        }
                    },
                    "SNA": {
                        "fields": {
                            "county": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "createdAt": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "kind": "scalar"
                                }
                            },
                            "dnrId": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "id": {
                                "nullable": false,
                                "type": {
                                    "codecId": "sql/char@1",
                                    "kind": "scalar",
                                    "typeParams": {
                                        "length": 36
                                    }
                                }
                            },
                            "location": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "name": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "section": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "subsection": {
                                "nullable": true,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "updatedAt": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "kind": "scalar"
                                }
                            }
                        },
                        "relations": {
                            "plants": {
                                "cardinality": "N:M",
                                "on": {
                                    "localFields": [
                                        "id"
                                    ],
                                    "targetFields": [
                                        "snaId"
                                    ]
                                },
                                "through": {
                                    "childColumns": [
                                        "plantId"
                                    ],
                                    "namespaceId": "public",
                                    "parentColumns": [
                                        "snaId"
                                    ],
                                    "table": "SNAPlant",
                                    "targetColumns": [
                                        "id"
                                    ]
                                },
                                "to": {
                                    "model": "Plant",
                                    "namespace": "public"
                                }
                            }
                        },
                        "storage": {
                            "fields": {
                                "county": {
                                    "column": "county"
                                },
                                "createdAt": {
                                    "column": "createdAt"
                                },
                                "dnrId": {
                                    "column": "dnrId"
                                },
                                "id": {
                                    "column": "id"
                                },
                                "location": {
                                    "column": "location"
                                },
                                "name": {
                                    "column": "name"
                                },
                                "section": {
                                    "column": "section"
                                },
                                "subsection": {
                                    "column": "subsection"
                                },
                                "updatedAt": {
                                    "column": "updatedAt"
                                }
                            },
                            "namespaceId": "public",
                            "table": "SNA"
                        }
                    },
                    "SNAPlant": {
                        "fields": {
                            "createdAt": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "kind": "scalar"
                                }
                            },
                            "id": {
                                "nullable": false,
                                "type": {
                                    "codecId": "sql/char@1",
                                    "kind": "scalar",
                                    "typeParams": {
                                        "length": 36
                                    }
                                }
                            },
                            "plantId": {
                                "nullable": false,
                                "type": {
                                    "codecId": "sql/char@1",
                                    "kind": "scalar",
                                    "typeParams": {
                                        "length": 36
                                    }
                                }
                            },
                            "snaId": {
                                "nullable": false,
                                "type": {
                                    "codecId": "sql/char@1",
                                    "kind": "scalar",
                                    "typeParams": {
                                        "length": 36
                                    }
                                }
                            },
                            "updatedAt": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "kind": "scalar"
                                }
                            }
                        },
                        "relations": {
                            "plant": {
                                "cardinality": "N:1",
                                "on": {
                                    "localFields": [
                                        "plantId"
                                    ],
                                    "targetFields": [
                                        "id"
                                    ]
                                },
                                "to": {
                                    "model": "Plant",
                                    "namespace": "public"
                                }
                            },
                            "sna": {
                                "cardinality": "N:1",
                                "on": {
                                    "localFields": [
                                        "snaId"
                                    ],
                                    "targetFields": [
                                        "id"
                                    ]
                                },
                                "to": {
                                    "model": "SNA",
                                    "namespace": "public"
                                }
                            }
                        },
                        "storage": {
                            "fields": {
                                "createdAt": {
                                    "column": "createdAt"
                                },
                                "id": {
                                    "column": "id"
                                },
                                "plantId": {
                                    "column": "plantId"
                                },
                                "snaId": {
                                    "column": "snaId"
                                },
                                "updatedAt": {
                                    "column": "updatedAt"
                                }
                            },
                            "namespaceId": "public",
                            "table": "SNAPlant"
                        }
                    }
                }
            }
        }
    },
    "storage": {
        "namespaces": {
            "public": {
                "entries": {
                    "table": {
                        "Plant": {
                            "columns": {
                                "commonName": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "createdAt": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "default": {
                                        "expression": "now()",
                                        "kind": "function"
                                    },
                                    "nativeType": "timestamptz",
                                    "nullable": false
                                },
                                "duration": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "family": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "growthHabit": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "id": {
                                    "codecId": "sql/char@1",
                                    "nativeType": "character",
                                    "nullable": false,
                                    "typeParams": {
                                        "length": 36
                                    }
                                },
                                "oldScientificNames": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "scientificName": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "status": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "taxonId": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "updatedAt": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "nativeType": "timestamptz",
                                    "nullable": false
                                },
                                "usdaCode": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                }
                            },
                            "foreignKeys": [],
                            "indexes": [],
                            "primaryKey": {
                                "columns": [
                                    "id"
                                ]
                            },
                            "uniques": []
                        },
                        "SNA": {
                            "columns": {
                                "county": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "createdAt": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "default": {
                                        "expression": "now()",
                                        "kind": "function"
                                    },
                                    "nativeType": "timestamptz",
                                    "nullable": false
                                },
                                "dnrId": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "id": {
                                    "codecId": "sql/char@1",
                                    "nativeType": "character",
                                    "nullable": false,
                                    "typeParams": {
                                        "length": 36
                                    }
                                },
                                "location": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "name": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "section": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "subsection": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": true
                                },
                                "updatedAt": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "nativeType": "timestamptz",
                                    "nullable": false
                                }
                            },
                            "foreignKeys": [],
                            "indexes": [],
                            "primaryKey": {
                                "columns": [
                                    "id"
                                ]
                            },
                            "uniques": []
                        },
                        "SNAPlant": {
                            "columns": {
                                "createdAt": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "default": {
                                        "expression": "now()",
                                        "kind": "function"
                                    },
                                    "nativeType": "timestamptz",
                                    "nullable": false
                                },
                                "id": {
                                    "codecId": "sql/char@1",
                                    "nativeType": "character",
                                    "nullable": false,
                                    "typeParams": {
                                        "length": 36
                                    }
                                },
                                "plantId": {
                                    "codecId": "sql/char@1",
                                    "nativeType": "character",
                                    "nullable": false,
                                    "typeParams": {
                                        "length": 36
                                    }
                                },
                                "snaId": {
                                    "codecId": "sql/char@1",
                                    "nativeType": "character",
                                    "nullable": false,
                                    "typeParams": {
                                        "length": 36
                                    }
                                },
                                "updatedAt": {
                                    "codecId": "pg/timestamptz-string@1",
                                    "nativeType": "timestamptz",
                                    "nullable": false
                                }
                            },
                            "foreignKeys": [],
                            "indexes": [],
                            "primaryKey": {
                                "columns": [
                                    "id"
                                ]
                            },
                            "uniques": []
                        }
                    }
                },
                "id": "public",
                "kind": "postgres-schema"
            }
        },
        "storageHash": "21b26c7195135bfd08632f086dacc8dd0ccd08be9df28f8f9008ada27e83f5ba"
    },
    "execution": {
        "executionHash": "9b336a2f3507f83a4983e767f2412bfa9b03c2dc612eca2309ab3ec57bd62ef0",
        "mutations": {
            "defaults": [
                {
                    "onCreate": {
                        "id": "uuidv7",
                        "kind": "generator"
                    },
                    "ref": {
                        "column": "id",
                        "namespace": "public",
                        "table": "Plant"
                    }
                },
                {
                    "onCreate": {
                        "id": "timestampNow",
                        "kind": "generator"
                    },
                    "onUpdate": {
                        "id": "timestampNow",
                        "kind": "generator"
                    },
                    "ref": {
                        "column": "updatedAt",
                        "namespace": "public",
                        "table": "Plant"
                    }
                },
                {
                    "onCreate": {
                        "id": "uuidv7",
                        "kind": "generator"
                    },
                    "ref": {
                        "column": "id",
                        "namespace": "public",
                        "table": "SNA"
                    }
                },
                {
                    "onCreate": {
                        "id": "timestampNow",
                        "kind": "generator"
                    },
                    "onUpdate": {
                        "id": "timestampNow",
                        "kind": "generator"
                    },
                    "ref": {
                        "column": "updatedAt",
                        "namespace": "public",
                        "table": "SNA"
                    }
                },
                {
                    "onCreate": {
                        "id": "uuidv7",
                        "kind": "generator"
                    },
                    "ref": {
                        "column": "id",
                        "namespace": "public",
                        "table": "SNAPlant"
                    }
                },
                {
                    "onCreate": {
                        "id": "timestampNow",
                        "kind": "generator"
                    },
                    "onUpdate": {
                        "id": "timestampNow",
                        "kind": "generator"
                    },
                    "ref": {
                        "column": "updatedAt",
                        "namespace": "public",
                        "table": "SNAPlant"
                    }
                }
            ]
        }
    },
    "capabilities": {
        "postgres": {
            "distinctOn": true,
            "jsonAgg": true,
            "lateral": true,
            "limit": true,
            "orderBy": true,
            "returning": true
        },
        "sql": {
            "checkConstraint": true,
            "defaultInInsert": true,
            "enums": true,
            "lateral": true,
            "returning": true,
            "scalarList": true
        }
    },
    "extensions": {},
    "meta": {},
    "_generated": {
        "warning": "⚠️  GENERATED FILE - DO NOT EDIT",
        "message": "This file is automatically generated by \"prisma contract emit\".",
        "regenerate": "To regenerate, run: prisma contract emit"
    }
};
}),
"[project]/sna-app/src/prisma/list.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"],
    "listPlantsSNAs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$list$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["listPlantsSNAs"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$list$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/list.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$list$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$list$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/sna-app/src/prisma/list.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "listPlantsSNAs",
    ()=>listPlantsSNAs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/seed.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function listPlantsSNAs() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seed"])();
    const plants = await __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Plant.select("id", "email", "username", "name", "createdAt").all();
    const snas = await __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.SNA.select("id", "name", "description", "createdAt").all();
    return users.map((user)=>({
            id: String(user.id),
            email: user.email,
            username: user.username ?? null,
            name: user.name ?? null,
            createdAt: user.createdAt
        }));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/sna-app/src/prisma/seed.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "seed",
    ()=>seed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sna-app/src/prisma/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const users = [
    {
        email: "alice@prisma.io",
        username: "alice",
        name: "Alice"
    },
    {
        email: "bob@prisma.io",
        username: "bob",
        name: "Bob"
    },
    {
        email: "carol@prisma.io",
        username: "carol",
        name: "Carol"
    }
];
let pendingSeed;
async function runSeed() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectDatabase"])();
    for (const user of users){
        await __TURBOPACK__imported__module__$5b$project$5d2f$sna$2d$app$2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.User.upsert({
            create: user,
            update: {},
            conflictOn: {
                email: user.email
            }
        });
    }
}
function seed() {
    pendingSeed ??= runSeed().catch((error)=>{
        pendingSeed = undefined;
        throw error;
    });
    return pendingSeed;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0v4wxki._.js.map