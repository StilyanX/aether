// Per-book viz namespace for The Shadow of the Torturer.
// Re-exports the names the page uses, aliasing cross-book collisions
// (CharacterNetwork, SymbolNetwork) to the BI_ prefixed versions from
// the central catalog at src/components/viz/index.jsx.
export {
  GuildHierarchy,
  CitadelMap,
  PowerTriangle,
  NessusRoute,
  InireMirrors,
  AvernDuel,
  JourneyArc,
  BI_CharacterNetwork as CharacterNetwork,
  BI_SymbolNetwork as SymbolNetwork,
  Plate
} from '../../../../../components/viz'
