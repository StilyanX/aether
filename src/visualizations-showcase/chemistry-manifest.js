// Unit grouping for the general-chemistry visualizations showcase.
// Names are the exported function names from src/components/viz/chemistry.jsx.
// The showcase iterates EVERY export of that module; any name not listed here
// lands in the trailing "Uncategorized" section, so the gallery is always
// complete even if a new viz is added without touching this manifest.
//
// The 10 unit labels below mirror the general-chemistry curriculum and the
// recommendation roadmap in general-chemistry-visualization-audit.md (this
// folder). Only units with a built viz render — empty groups are filtered out,
// so as viz are added to chemistry.jsx and named here, their unit section
// lights up automatically. Today only Unit 04 (Kinetics) has viz.

export const CHEMISTRY_GROUPS = [
  {
    label: 'Unit 01 · Atomic Structure & Periodicity',
    names: []
  },
  {
    label: 'Unit 02 · Bonding & Structure',
    names: []
  },
  {
    label: 'Unit 03 · Energetics & Thermodynamics',
    names: []
  },
  {
    // The three existing chemistry.jsx exports are all kinetics/energy-profile
    // viz. MaxwellBoltzmann + ReactionEnergy + Catalyst render on the
    // chemical-kinetics-and-rate-laws topic page today.
    label: 'Unit 04 · Kinetics',
    names: ['MaxwellBoltzmannViz', 'ReactionEnergyViz', 'CatalystEnergyViz']
  },
  {
    label: 'Unit 05 · Chemical Equilibrium',
    names: []
  },
  {
    label: 'Unit 06 · Acid-Base & Aqueous Equilibria',
    names: []
  },
  {
    label: 'Unit 07 · Redox & Electrochemistry',
    names: []
  },
  {
    label: 'Unit 08 · Transition Metal & Coordination',
    names: []
  },
  {
    label: 'Unit 09 · Analytical & Spectroscopy',
    names: []
  },
  {
    label: 'Unit 10 · Industrial & Sustainable',
    names: []
  }
]
