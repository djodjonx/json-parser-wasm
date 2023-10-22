const fs = require('node:fs');

const wasmBuffer = fs.readFileSync('./pkg/rust_parser_bg.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const module = wasmModule.instance.exports;
  let m = 'hello'
  console.log(module)
  // console.log(module.say('djo'))
  console.log(module.add(1, 2))
  // console.log(sum); // Outputs: 11
})