// Per-topic viz namespace for Operations on Signed Rationals.
// Re-exports from the central catalog at src/components/viz/index.jsx.
// The catalog uses OSR_ prefixes to avoid name collisions; we alias them
// back to the plain names the topic page uses.
export {
  OSR_VectorAddSameSign as VectorAddSameSign,
  OSR_VectorAddOppositeSign as VectorAddOppositeSign,
  OSR_SumOfOppositesViz as SumOfOppositesViz,
  OSR_SubtractionAsAddOpposite as SubtractionAsAddOpposite,
  OSR_SignRuleGrid as SignRuleGrid,
  OSR_NegativeTimesNegativeProof as NegativeTimesNegativeProof,
  OSR_DistributiveLawVizOSR as DistributiveLawVizOSR,
  OSR_AdditionFormulasViz as AdditionFormulasViz,
  OSR_InvertAndMultiplyViz as InvertAndMultiplyViz,
  OSR_SignRulesQuotientViz as SignRulesQuotientViz,
  OSR_FoundationsMirrorViz as FoundationsMirrorViz,
  OSR_ParenthesisRemovalViz as ParenthesisRemovalViz
} from '../../../../components/viz'
