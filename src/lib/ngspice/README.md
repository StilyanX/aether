# ngspice (self-hosted WASM build)

This directory is the home for a self-hosted ngspice WebAssembly build, the designated circuits engine for this project.

## Status: scaffold only, not yet populated

The actual `ngspice.wasm` + `ngspice.js` loader files are not in this directory. **Circuit-simulation topics cannot ship until they are.**

A visualization must actually compute what it depicts. If a circuit topic is proposed while this directory is empty, stop and say the engine is missing. Do not fall back to a decorative SVG that only looks like a simulation.

## Upstream sources to fetch from when circuit topics come up

The ngspice project does not officially publish a WASM build. The community-maintained options:

1. **eecircuit-light** (danchitnis/eecircuit-light): a working circuit viewer with ngspice-wasm baked in. Extract the WASM and JS loader from their dist.
2. **circuit-fantasia** (Inductiva and similar academic forks): periodically rebuild ngspice via Emscripten.
3. **Self-build via Emscripten**: clone ngspice mainline (gitlab.com/ngspice/ngspice), apply the Emscripten patch set, run `emcc` against the ngspice C sources. Produces a 5 to 10 MB `.wasm` plus a JS loader that exposes a `Module` global.

Pick one approach when you have an actual circuit topic, and document which one you used so nobody has to second-guess it later.

## Expected file layout once populated

```
src/lib/ngspice/
├── README.md       (this file)
├── ngspice.wasm    (the compiled binary)
├── ngspice.js      (the Emscripten JS loader)
└── api.js          (a thin wrapper that exposes runSimulation(netlist) -> Promise<results>)
```

`api.js` should be hand-written and small. It hides the Emscripten boilerplate and gives the rest of the codebase a clean async function: pass a SPICE netlist string in, get parsed simulation results back.

## How to load in components

When a viz needs circuit simulation:

```js
const { runSimulation } = await import('../../lib/ngspice/api')
const results = await runSimulation(netlistString)
// render results with Observable Plot or hand-rolled SVG primitives
```

The dynamic import keeps the 5 to 10 MB WASM out of the main bundle and only loads it on circuit topics.

## License note

ngspice is BSD-3-licensed (see ngspice's COPYING file). Whichever build you use, vendor the upstream LICENSE alongside the WASM file in this directory.
