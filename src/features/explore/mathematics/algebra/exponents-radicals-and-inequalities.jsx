import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useExponentsRootsAndRadicalsConfig } from './exponents-roots-and-radicals'
import { useRootsPowersAndInequalitiesConfig } from './roots-powers-and-inequalities'

function useConfig() {
  const a = useExponentsRootsAndRadicalsConfig()
  const b = useRootsPowersAndInequalitiesConfig()
  return {
    cssPrefix: 'era rpi',
    documentTitle: 'Exponents, Radicals and Inequalities - AETHER',
    learning: {
      groupTitle: 'Number and Algebra Foundations',
      category: 'Module 3',
      title: 'Exponents, Radicals and Inequalities',
      subtitle:
        'Index laws, roots, radicals and surds, plus solving inequalities and the AM-GM inequality.',
      sections: [...a.learning.sections, ...b.learning.sections]
    },
    practice: [...(a.practice || []), ...(b.practice || [])],
    reference: {
      category: 'Quick Reference',
      title: 'Exponents, Radicals and Inequalities',
      sections: [
        ...((a.reference && a.reference.sections) || []),
        ...((b.reference && b.reference.sections) || [])
      ]
    },
    customCss: [a.customCss, b.customCss].filter(Boolean).join('\n')
  }
}

export default function ExponentsRadicalsAndInequalities() {
  return <LearningTemplate config={useConfig()} />
}
