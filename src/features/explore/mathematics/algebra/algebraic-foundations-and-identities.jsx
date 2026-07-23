import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useAlgebraicFoundationsConfig } from './algebraic-foundations'
import { useAlgebraicIdentitiesConfig } from './algebraic-identities'

function useConfig() {
  const a = useAlgebraicFoundationsConfig()
  const b = useAlgebraicIdentitiesConfig()
  return {
    cssPrefix: 'alg aid',
    documentTitle: 'Algebraic Foundations and Identities - AETHER',
    learning: {
      groupTitle: 'Number and Algebra Foundations',
      category: 'Module 2',
      title: 'Algebraic Foundations and Identities',
      subtitle:
        'Variables, terms and the laws of algebra, plus the special products and identities built on them.',
      sections: [...a.learning.sections, ...b.learning.sections]
    },
    practice: [...(a.practice || []), ...(b.practice || [])],
    reference: {
      category: 'Quick Reference',
      title: 'Algebraic Foundations and Identities',
      sections: [
        ...((a.reference && a.reference.sections) || []),
        ...((b.reference && b.reference.sections) || [])
      ]
    },
    customCss: [a.customCss, b.customCss].filter(Boolean).join('\n')
  }
}

export default function AlgebraicFoundationsAndIdentities() {
  return <LearningTemplate config={useConfig()} />
}
