"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Program {\n  id       Int       @id @default(autoincrement())\n  code     String    @unique\n  name     String\n  students Student[]\n}\n\nmodel Student {\n  id        Int     @id @default(autoincrement())\n  studentId String  @unique\n  firstName String\n  lastName  String\n  email     String\n  programId Int\n  program   Program @relation(fields: [programId], references: [id], onDelete: Cascade)\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Program\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"students\",\"kind\":\"object\",\"type\":\"Student\",\"relationName\":\"ProgramToStudent\"}],\"dbName\":null,\"schema\":null},\"Student\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"studentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"programId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"program\",\"kind\":\"object\",\"type\":\"Program\",\"relationName\":\"ProgramToStudent\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"program\",\"students\",\"_count\",\"Program.findUnique\",\"Program.findUniqueOrThrow\",\"Program.findFirst\",\"Program.findFirstOrThrow\",\"Program.findMany\",\"data\",\"Program.createOne\",\"Program.createMany\",\"Program.createManyAndReturn\",\"Program.updateOne\",\"Program.updateMany\",\"Program.updateManyAndReturn\",\"create\",\"update\",\"Program.upsertOne\",\"Program.deleteOne\",\"Program.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Program.groupBy\",\"Program.aggregate\",\"Student.findUnique\",\"Student.findUniqueOrThrow\",\"Student.findFirst\",\"Student.findFirstOrThrow\",\"Student.findMany\",\"Student.createOne\",\"Student.createMany\",\"Student.createManyAndReturn\",\"Student.updateOne\",\"Student.updateMany\",\"Student.updateManyAndReturn\",\"Student.upsertOne\",\"Student.deleteOne\",\"Student.deleteMany\",\"Student.groupBy\",\"Student.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"studentId\",\"firstName\",\"lastName\",\"email\",\"programId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"code\",\"name\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "ZxYgBwQAAEEAIC4AAD4AMC8AAAkAEDAAAD4AMDECAAAAAUIBAAAAAUMBAEAAIQEAAAABACAKAwAAQwAgLgAAQgAwLwAAAwAQMAAAQgAwMQIAPwAhMgEAQAAhMwEAQAAhNAEAQAAhNQEAQAAhNgIAPwAhAQMAAGEAIAoDAABDACAuAABCADAvAAADABAwAABCADAxAgAAAAEyAQAAAAEzAQBAACE0AQBAACE1AQBAACE2AgA_ACEDAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAHBAAAQQAgLgAAPgAwLwAACQAQMAAAPgAwMQIAPwAhQgEAQAAhQwEAQAAhAQQAAGAAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAQEAABfACAxAgAAAAFCAQAAAAFDAQAAAAEBCwAADgAgAzECAAAAAUIBAAAAAUMBAAAAAQELAAAQADABCwAAEAAwBAQAAFIAIDECAEoAIUIBAEkAIUMBAEkAIQIAAAABACALAAATACADMQIASgAhQgEASQAhQwEASQAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACAFBQAATQAgGAAATgAgGQAAUQAgGgAAUAAgGwAATwAgBi4AAD0AMC8AABwAEDAAAD0AMDECADYAIUIBADcAIUMBADcAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAHAwAATAAgMQIAAAABMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgIAAAABAQsAACQAIAYxAgAAAAEyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAE2AgAAAAEBCwAAJgAwAQsAACYAMAcDAABLACAxAgBKACEyAQBJACEzAQBJACE0AQBJACE1AQBJACE2AgBKACECAAAABQAgCwAAKQAgBjECAEoAITIBAEkAITMBAEkAITQBAEkAITUBAEkAITYCAEoAIQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgBQUAAEQAIBgAAEUAIBkAAEgAIBoAAEcAIBsAAEYAIAkuAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzAQA3ACE0AQA3ACE1AQA3ACE2AgA2ACEDAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAkuAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzAQA3ACE0AQA3ACE1AQA3ACE2AgA2ACENBQAAOQAgGAAAPAAgGQAAOQAgGgAAOQAgGwAAOQAgNwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABQQIAOwAhDgUAADkAIBoAADoAIBsAADoAIDcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAUEBADgAIQ4FAAA5ACAaAAA6ACAbAAA6ACA3AQAAAAE4AQAAAAQ5AQAAAAQ6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQA4ACEINwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABQQIAOQAhCzcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAUEBADoAIQ0FAAA5ACAYAAA8ACAZAAA5ACAaAAA5ACAbAAA5ACA3AgAAAAE4AgAAAAQ5AgAAAAQ6AgAAAAE7AgAAAAE8AgAAAAE9AgAAAAFBAgA7ACEINwgAAAABOAgAAAAEOQgAAAAEOggAAAABOwgAAAABPAgAAAABPQgAAAABQQgAPAAhBi4AAD0AMC8AABwAEDAAAD0AMDECADYAIUIBADcAIUMBADcAIQcEAABBACAuAAA-ADAvAAAJABAwAAA-ADAxAgA_ACFCAQBAACFDAQBAACEINwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABQQIAOQAhCzcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAUEBADoAIQNEAAADACBFAAADACBGAAADACAKAwAAQwAgLgAAQgAwLwAAAwAQMAAAQgAwMQIAPwAhMgEAQAAhMwEAQAAhNAEAQAAhNQEAQAAhNgIAPwAhCQQAAEEAIC4AAD4AMC8AAAkAEDAAAD4AMDECAD8AIUIBAEAAIUMBAEAAIUcAAAkAIEgAAAkAIAAAAAAAAUwBAAAAAQVMAgAAAAFSAgAAAAFTAgAAAAFUAgAAAAFVAgAAAAEFEgAAYwAgEwAAZgAgSQAAZAAgSgAAZQAgTwAAAQAgAxIAAGMAIEkAAGQAIE8AAAEAIAAAAAAACxIAAFMAMBMAAFgAMEkAAFQAMEoAAFUAMEsAAFYAIEwAAFcAME0AAFcAME4AAFcAME8AAFcAMFAAAFkAMFEAAFoAMAUxAgAAAAEyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAECAAAABQAgEgAAXgAgAwAAAAUAIBIAAF4AIBMAAF0AIAELAABiADAKAwAAQwAgLgAAQgAwLwAAAwAQMAAAQgAwMQIAAAABMgEAAAABMwEAQAAhNAEAQAAhNQEAQAAhNgIAPwAhAgAAAAUAIAsAAF0AIAIAAABbACALAABcACAJLgAAWgAwLwAAWwAQMAAAWgAwMQIAPwAhMgEAQAAhMwEAQAAhNAEAQAAhNQEAQAAhNgIAPwAhCS4AAFoAMC8AAFsAEDAAAFoAMDECAD8AITIBAEAAITMBAEAAITQBAEAAITUBAEAAITYCAD8AIQUxAgBKACEyAQBJACEzAQBJACE0AQBJACE1AQBJACEFMQIASgAhMgEASQAhMwEASQAhNAEASQAhNQEASQAhBTECAAAAATIBAAAAATMBAAAAATQBAAAAATUBAAAAAQQSAABTADBJAABUADBLAABWACBPAABXADAAAQQAAGAAIAUxAgAAAAEyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAEDMQIAAAABQgEAAAABQwEAAAABAgAAAAEAIBIAAGMAIAMAAAAJACASAABjACATAABnACAFAAAACQAgCwAAZwAgMQIASgAhQgEASQAhQwEASQAhAzECAEoAIUIBAEkAIUMBAEkAIQIEBgIFAAMBAwABAQQHAAAAAAUFAAgYAAkZAAoaAAsbAAwAAAAAAAUFAAgYAAkZAAoaAAsbAAwBAwABAQMAAQUFABEYABIZABMaABQbABUAAAAAAAUFABEYABIZABMaABQbABUGAgEHCAEICwEJDAEKDQEMDwENEQQOEgUPFAEQFgQRFwYUGAEVGQEWGgQcHQcdHg0eHwIfIAIgIQIhIgIiIwIjJQIkJwQlKA4mKgInLAQoLQ8pLgIqLwIrMAQsMxAtNBY"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map