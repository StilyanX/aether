import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useArithmeticFoundationsConfig } from './arithmetic-foundations'
import { useFractionsRatiosConfig } from './fractions-ratios-and-proportions'

function useConfig() {
  const a = useArithmeticFoundationsConfig()
  const b = useFractionsRatiosConfig()
  return {
    cssPrefix: 'arf fra',
    documentTitle: 'Arithmetic Foundations and Proportions - AETHER',
    learning: {
      groupTitle: 'Number and Algebra Foundations',
      category: 'Module 1',
      title: 'Arithmetic Foundations and Proportions',
      subtitle:
        'Place value, the four operations, negative numbers, fractions, ratios and proportions.',
      sections: [...a.learning.sections, ...b.learning.sections]
    },
    practice: [...(a.practice || []), ...(b.practice || [])],
    reference: {
      category: 'Quick Reference',
      title: 'Arithmetic Foundations and Proportions',
      sections: [
        ...((a.reference && a.reference.sections) || []),
        ...((b.reference && b.reference.sections) || [])
      ]
    },
    customCss: [a.customCss, b.customCss].filter(Boolean).join('\n')
  }
}

export default function ArithmeticFoundationsAndProportions() {
  return <LearningTemplate config={useConfig()} />
}
