const compile = require("near-bindgen-as/compiler").compile

compile("assembly/index.ts", // input file
        "dist/main.wasm",    // output file
        [
        //   "-O1",          // Optional arguments
        "--debug",
        "--measure",         // Shows compiler runtime
        "--validate"         // Validate the generated wasm module
        ], {verbose: true});