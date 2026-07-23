// Manifest of the inline (topic-page) classical-mechanics viz.
//
// These viz are defined as exported functions INSIDE their topic content files
// (the `export` was added so both the topic page and this showcase render the
// SAME function — one definition, true sync). id/title/size/aspect mirror the
// <VizFigure id title size aspect> props at each call-site, so the showcase
// frames each viz exactly like the topic page does.
//
// `file` keys into the namespace imports in showcase.jsx (vkg/nli/amr/msp);
// `comp` is the exported function name to resolve against that namespace.

export const INLINE_VIZ = [
  // vkg — vectors-kinematics-and-galilean-structure.jsx
  {
    id: '01.1.1',
    title: 'Vector Addition',
    file: 'vkg',
    comp: 'Vkg_VecAdditionInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.2',
    title: 'Sliding Vector',
    file: 'vkg',
    comp: 'Vkg_SlidingVectorInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.3',
    title: 'Force Decomposition',
    file: 'vkg',
    comp: 'Vkg_ForceDecompInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.4',
    title: 'Components Under Rotation',
    file: 'vkg',
    comp: 'Vkg_ComponentsRotationInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.5',
    title: 'Base Vectors',
    file: 'vkg',
    comp: 'Vkg_BaseVectorsInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.6',
    title: 'Cross Product',
    file: 'vkg',
    comp: 'Vkg_CrossProductInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.7',
    title: 'Cross Antisymmetry',
    file: 'vkg',
    comp: 'Vkg_CrossAntisymInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.8',
    title: 'Dot Product · Work',
    file: 'vkg',
    comp: 'Vkg_DotWorkInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.10',
    title: 'Polar Velocity Decomposition',
    file: 'vkg',
    comp: 'Vkg_PolarUnitsInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.11',
    title: 'Displacement Origin Invariance',
    file: 'vkg',
    comp: 'Vkg_DisplacementInvariantInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.12',
    title: 'Rotating Vector Chord',
    file: 'vkg',
    comp: 'Vkg_RotatingChordInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.13',
    title: 'Uniform Circular Motion',
    file: 'vkg',
    comp: 'Vkg_UCMInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.14',
    title: 'Projectile Motion',
    file: 'vkg',
    comp: 'Vkg_ProjectileMotionInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.15',
    title: 'Taylor sin x',
    file: 'vkg',
    comp: 'Vkg_TaylorSinInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.16',
    title: 'Galilean Symmetries',
    file: 'vkg',
    comp: 'Vkg_GalileanTableInline',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.17',
    title: 'Galilean Boost · The Train',
    file: 'vkg',
    comp: 'Vkg_GalileanBoostInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.1.18',
    title: 'Galilean Spacetime · the shear',
    file: 'vkg',
    comp: 'Vkg_GalileanSpacetimeInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.11.2',
    title: 'Dot Product & Projection',
    file: 'vkg',
    comp: 'Vkg_DotProductInteractiveInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.11.3',
    title: 'Projectile Range',
    file: 'vkg',
    comp: 'Vkg_ProjectileLauncherInline',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },

  // nli — newtons-laws-and-integration.jsx
  {
    id: '01.2.1',
    title: 'Block on Wedge',
    file: 'nli',
    comp: 'Nli_BlockOnWedge',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.3',
    title: 'Conical Pendulum Bifurcation',
    file: 'nli',
    comp: 'Nli_ConicalBifurcation',
    size: 'wide',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.4',
    title: 'Hanging Rope Tension',
    file: 'nli',
    comp: 'Nli_HangingRope',
    size: 'wide',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.6',
    title: 'Simple Harmonic Motion',
    file: 'nli',
    comp: 'Nli_SHM',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.7',
    title: 'Harmonic Phase Portrait',
    file: 'nli',
    comp: 'Nli_HarmonicPhasePortrait',
    size: 'compact',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.8',
    title: 'Center vs Saddle',
    file: 'nli',
    comp: 'Nli_CenterSaddle',
    size: 'wide',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.9',
    title: 'Double-Well',
    file: 'nli',
    comp: 'Nli_DoubleWell',
    size: 'wide',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.10',
    title: 'Lissajous',
    file: 'nli',
    comp: 'Nli_Lissajous',
    size: 'wide',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.11',
    title: 'Pendulum Phase Plane',
    file: 'nli',
    comp: 'Nli_PendulumPhasePlane',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.12',
    title: 'Wedge Constraint',
    file: 'nli',
    comp: 'Nli_WedgeConstraint',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.14',
    title: 'Action-Reaction Pair',
    file: 'nli',
    comp: 'Nli_ActionReaction',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.2.15',
    title: 'Inverse-Square vs Uniform Gravity',
    file: 'nli',
    comp: 'Nli_InverseSquareGravity',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.11.4',
    title: 'Inclined Block',
    file: 'nli',
    comp: 'Nli_InclineBlock',
    size: 'body',
    aspect: 'auto',
    part: 1
  },

  // amr — angular-momentum-and-rotation.jsx
  {
    id: '01.5.1',
    title: 'L = r × p geometry',
    file: 'amr',
    comp: 'Amr_AngMomGeom',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.2',
    title: 'Sliding block',
    file: 'amr',
    comp: 'Amr_SlidingBlock',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.3',
    title: 'Conical pendulum',
    file: 'amr',
    comp: 'Amr_ConicalPendulum',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.4',
    title: 'Torque & lever arm',
    file: 'amr',
    comp: 'Amr_TorqueLever',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.5',
    title: 'Moments of Inertia',
    file: 'amr',
    comp: 'Amr_MomentsTable',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.6',
    title: 'Parallel Axis',
    file: 'amr',
    comp: 'Amr_ParallelAxis',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.7',
    title: 'Physical pendulum',
    file: 'amr',
    comp: 'Amr_PhysicalPendulum',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.8',
    title: 'Rolling wheel',
    file: 'amr',
    comp: 'Amr_RollingWheel',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.9',
    title: 'Drum on Incline',
    file: 'amr',
    comp: 'Amr_DrumOnIncline',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.10',
    title: 'Bohr atom',
    file: 'amr',
    comp: 'Amr_BohrAtom',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.11',
    title: 'Chasles two-mass rod',
    file: 'amr',
    comp: 'Amr_ChaslesRod',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.5.12',
    title: 'Kepler equal areas',
    file: 'amr',
    comp: 'Amr_EqualAreas',
    size: 'body',
    aspect: 'auto',
    part: 1
  },

  // msp — momentum-and-systems-of-particles.jsx
  {
    id: '01.3.6',
    title: 'Impulse and Contact Time',
    file: 'msp',
    comp: 'Msp_ImpulseInline',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.3.7',
    title: 'Tsiolkovsky Rocket Equation',
    file: 'msp',
    comp: 'Msp_TsiolkovskyInline',
    size: 'body',
    aspect: 'auto',
    part: 1
  },
  {
    id: '01.3.9',
    title: 'Momentum Form vs Force Form',
    file: 'msp',
    comp: 'Msp_MomentumVsForceInline',
    size: 'body',
    aspect: 'auto',
    part: 1
  }
]
