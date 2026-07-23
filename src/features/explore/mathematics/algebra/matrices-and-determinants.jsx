import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  ReflectionMapViz,
  TriangleAreaViz,
  UnitSquareTransformViz,
  EigenvectorViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'mtx',
    documentTitle: 'Matrices and Determinants - AETHER',
    learning: {
      groupTitle: 'Matrices and Linear Systems',
      category: 'Linear Algebra',
      title: 'Matrices and Determinants',
      subtitle: `Grids of numbers that add, multiply, and invert like their own kind of algebra, with one number, the determinant, that tests whether a matrix can be undone.`,
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>What Is a Matrix, and When Are Two Equal?</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Guess: how many separate numbers do you need to fully describe a table with 3 rows and 4 columns?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You need 12 numbers, one for every position in the grid. A table with 3 rows and 4 columns has $3 \\times 4 = 12$ entries in total.`}</p>
            </details>
          </div>

          <p>{`A matrix is a rectangular block of numbers arranged in rows and columns. Each number inside the block is called an entry. You describe a matrix's size by its number of rows and its number of columns, written rows times columns.`}</p>

          <p>{`For example, a matrix with 2 rows and 3 columns has size $2 \\times 3$. A matrix with the same number of rows as columns is called a square matrix. In a square matrix, the entries running from the top-left corner to the bottom-right corner form the main diagonal.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`reach for a matrix to organize many related numbers as one object. It could be a grid of measurements, or the coefficients of several equations.`}
          </p>

          <div className="lrn-eq">
            <span>{`$$A = \\begin{bmatrix} 2 & -1 & 5 & 0 \\end{bmatrix} \\quad (1 \\times 4) \\qquad B = \\begin{bmatrix} 4 & 1 & 0 \\\\ -3 & 2 & 7 \\\\ 1 & 1 & 6 \\end{bmatrix} \\quad (3 \\times 3)$$`}</span>
            <span>{`$$C = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} \\quad (2 \\times 1) \\qquad D = \\begin{bmatrix} 9 \\end{bmatrix} \\quad (1 \\times 1)$$`}</span>
          </div>

          <p>{`A matrix with only one row, like $A$, is a row matrix. A matrix with only one column, like $C$, is a column matrix. $B$ is a square matrix of size $3 \\times 3$; its main diagonal entries are 4, 2, and 6. $D$ is a $1 \\times 1$ matrix. A single number in brackets is awkward to write, so writing $D = 9$ is the common shorthand.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a $1 \\times 1$ matrix behave exactly like a plain number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A $1 \\times 1$ matrix holds only one entry, in one position. There is no second row or column to interact with. So every matrix operation (adding, scaling, multiplying) becomes ordinary arithmetic on that single number.`}</p>
            </details>
          </div>

          <p>{`To name a single entry, you use two small numbers written below the letter (subscripts): the row number first, then the column number. The entry $a_{ij}$ sits in row $i$, column $j$, of matrix $A$. In $B$ above, $b_{21} = -3$ because it sits in row 2, column 1.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A matrix needs two subscripts instead of one because a list of numbers (like a row matrix) only needs one position to find an entry.`}</p>
            <p>{`A full grid needs two coordinates, row and column, to pin down a single entry. A theater seat needs both a row letter and a seat number, the same way.`}</p>
          </div>

          <h3>When Are Two Matrices Equal?</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two matrices both contain the same four numbers, 1, 2, 3, 4, but arranged differently. Are they equal?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. Matrix equality requires every entry in the same position to match, not just the same numbers to appear somewhere in the matrix.`}</p>
            </details>
          </div>

          <p>{`Two matrices are equal only when they have the same size and every corresponding entry matches. Same size alone is not enough. Every entry in row $i$, column $j$ of one matrix must equal the entry in row $i$, column $j$ of the other.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`check matrix equality when a problem asks you to solve for unknown entries.`}
          </p>

          <p>{`Suppose you are told these two matrices are equal:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{bmatrix} a & b \\\\ 2 & c+d \\end{bmatrix} = \\begin{bmatrix} 1 & -1 \\\\ 2 & 3 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Matching entries one by one gives $a = 1$, $b = -1$, and $c + d = 3$. Since matrix equality only pins down $c+d$ as a sum, you need another equation to find $c$ and $d$ separately. If you were also told $c - d = 1$, adding the two equations gives $2c = 4$, so $c = 2$ and $d = 1$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does matching two matrices entry by entry turn one matrix equation into several ordinary number equations?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each entry position gives its own independent equation once you require matching entries, and a matrix generally has more than one entry. One matrix equation is really a bundle of separate number equations, one per position.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Adding, Subtracting, and Scaling Matrices</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You have two matrices of size $2 \\times 2$ and one matrix of size $2 \\times 3$. Can you add the $2\\times2$ and the $2\\times3$ matrix together?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. You can only add or subtract matrices of the same size, since addition works entry by entry and a $2\\times3$ matrix has entries with no $2\\times2$ counterpart.`}</p>
            </details>
          </div>

          <p>{`You add or subtract two matrices only when they have the same size. You add or subtract them entry by entry:`}</p>

          <div className="lrn-eq">
            <span>{`$$(A+B)_{ij} = a_{ij} + b_{ij} \\qquad (A-B)_{ij} = a_{ij} - b_{ij}$$`}</span>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`add or subtract matrices when comparing two data sets shaped as the same grid.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Julia Robinson (1919 to 1985)</span>
            <div className="lrn-definition-desc">
              <p>{`An American mathematician known for her work on Hilbert's tenth problem. Her results laid groundwork used throughout modern algebra and computability theory.`}</p>
            </div>
          </div>

          <p>{`Let $A = \\begin{bmatrix} 2 & 0 \\\\ -1 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 4 \\\\ 2 & -1 \\end{bmatrix}$, and $C = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$.`}</p>

          <p>{`Then $A + B = \\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix}$ and $A - B = \\begin{bmatrix} 1 & -4 \\\\ -3 & 4 \\end{bmatrix}$. But $C + A$ is undefined, because $C$ is $2\\times3$ and $A$ is $2\\times2$. Their sizes do not match, so there is no way to pair up every entry.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does mismatched size make addition impossible, rather than just awkward?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Addition works by pairing up entries at matching positions. If one matrix has a position the other does not, there is simply nothing to add to it, so the operation has no defined result at all, not just an inconvenient one.`}</p>
            </details>
          </div>

          <p>{`To scale a matrix by a number $c$ (called a scalar), multiply every entry by $c$:`}</p>

          <div className="lrn-eq">
            <span>{`$$(cA)_{ij} = c \\cdot a_{ij}$$`}</span>
          </div>

          <p>{`You can combine scaling with addition and subtraction to build a linear combination, such as $2A - B + \\frac{1}{3}C$. You compute a linear combination the same way as with plain numbers. Scale each matrix first, then add or subtract the results entry by entry.`}</p>

          <p>{`For example, with $A$ and $B$ above and $C = \\begin{bmatrix} 3 & 6 \\\\ 0 & -9 \\end{bmatrix}$:`}</p>

          <div className="lrn-eq">
            <span>{`$$2A - B + \\frac{1}{3}C = \\begin{bmatrix} 4 & 0 \\\\ -2 & 6 \\end{bmatrix} - \\begin{bmatrix} 1 & 4 \\\\ 2 & -1 \\end{bmatrix} + \\begin{bmatrix} 1 & 2 \\\\ 0 & -3 \\end{bmatrix} = \\begin{bmatrix} 4 & -2 \\\\ -4 & 4 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does scaling each matrix first give the same answer as scaling entry by entry all at once?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Scaling and adding both work position by position. Scaling then adding touches each entry the same number of times as scaling and adding entry by entry. Since both routes touch every entry equally, the two orders always agree.`}</p>
            </details>
          </div>

          <p>{`You can also solve equations where the unknown is a whole matrix. Solve $2X - A = B$ for $X$, using the same $A$ and $B$ from above. Treat $X$ the way you would treat a variable in ordinary algebra: isolate it first.`}</p>

          <div className="lrn-eq">
            <span>{`$$2X = B + A \\qquad X = \\frac{1}{2}(B+A) = \\frac{1}{2}\\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix} = \\begin{bmatrix} 1.5 & 2 \\\\ 0.5 & 1 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can you isolate a matrix variable using the same steps you use for a number variable?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Matrix addition, subtraction, and scaling follow the same entrywise rules (working position by position) as ordinary numbers. So the algebra steps that isolate a variable work identically. You add the same thing to both sides, or scale both sides, exactly as with numbers.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Addition and scaling must work entry by entry because a matrix is really just a bundle of separate numbers held in fixed positions.`}</p>
            <p>{`Combining two matrices only makes sense if you combine the numbers that share the same position. That is exactly what entrywise addition and scaling do.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Multiplying Matrices</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If matrix $A$ is $2 \\times 3$ and matrix $B$ is $3 \\times 4$, guess the size of the product $AB$, if it exists at all.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The product exists and is $2 \\times 4$. It takes the outer numbers: $A$'s rows (2) and $B$'s columns (4).`}</p>
            </details>
          </div>

          <p>{`Matrix multiplication does not work entry by entry. To multiply $A$ times $B$, the number of columns in $A$ must match the number of rows in $B$. This is the inside-numbers-must-match rule:`}</p>

          <div className="lrn-eq">
            <span>{`$$(m \\times r)(r \\times n) = m \\times n$$`}</span>
          </div>

          <p>{`The result has as many rows as $A$ and as many columns as $B$. To find the entry in row $i$, column $j$ of $AB$, multiply row $i$ of $A$ against column $j$ of $B$, term by term, and add:`}</p>

          <div className="lrn-eq">
            <span>{`$$(AB)_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\dots + a_{ir}b_{rj}$$`}</span>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`multiply matrices when one represents linear combinations, or a transform applied to the other's columns.`}
          </p>

          <p>{`Multiply $A = \\begin{bmatrix} 1 & 2 & 4 \\\\ 2 & 6 & 0 \\end{bmatrix}$ $(2\\times3)$ and $B = \\begin{bmatrix} 4 & 1 & 4 & 3 \\\\ 0 & -1 & 3 & 1 \\\\ 2 & 7 & 5 & 2 \\end{bmatrix}$ $(3\\times4)$.`}</p>

          <p>{`$A$ has 3 columns and $B$ has 3 rows, so the inside numbers match and $AB$ exists, sized $2 \\times 4$. Work out row 1 of $A$, which is $(1, 2, 4)$, against each of the four columns of $B$:`}</p>

          <div className="lrn-eq">
            <span>{`$$(AB)_{11} = (1)(4)+(2)(0)+(4)(2) = 12 \\qquad (AB)_{12} = (1)(1)+(2)(-1)+(4)(7) = 27$$`}</span>
            <span>{`$$(AB)_{13} = (1)(4)+(2)(3)+(4)(5) = 30 \\qquad (AB)_{14} = (1)(3)+(2)(1)+(4)(2) = 13$$`}</span>
          </div>

          <p>{`Now do the same with row 2 of $A$, which is $(2, 6, 0)$, against the four columns of $B$:`}</p>

          <div className="lrn-eq">
            <span>{`$$(AB)_{21} = (2)(4)+(6)(0)+(0)(2) = 8 \\qquad (AB)_{22} = (2)(1)+(6)(-1)+(0)(7) = -4$$`}</span>
            <span>{`$$(AB)_{23} = (2)(4)+(6)(3)+(0)(5) = 26 \\qquad (AB)_{24} = (2)(3)+(6)(1)+(0)(2) = 12$$`}</span>
          </div>

          <p>{`Collecting all eight entries gives the full product:`}</p>

          <div className="lrn-eq">
            <span>{`$$AB = \\begin{bmatrix} 12 & 27 & 30 & 13 \\\\ 8 & -4 & 26 & 12 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the entry in row $i$, column $j$ of $AB$ only use row $i$ of $A$ and column $j$ of $B$, and none of the other rows or columns?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The row-times-column rule pairs one specific row of $A$ with one specific column of $B$ for each output position, ignoring every other row or column by definition.`}</p>
            </details>
          </div>

          <p>{`Now check whether $BA$ is defined for the same two matrices. $B$ is $3\\times4$ and $A$ is $2\\times3$. The inside numbers, 4 and 2, do not match, so $BA$ is undefined here, even though $AB$ was defined.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">AB vs BA</span>
              <p>{`Matrix multiplication is almost never commutative, meaning the order rarely can be swapped. Even when both products are defined and the same size, $AB$ and $BA$ are usually different matrices. Sometimes one may not even exist.`}</p>
              <p>{`Try $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$: $AB = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$ but $BA = \\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix}$, not the same matrix.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ordinary numbers</span>
              <p>{`Ordinary numbers always satisfy $ab = ba$; matrices generally do not, since the two orders mix rows and columns differently.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Order matters for matrices, but not for numbers, because multiplying $A$ times $B$ mixes the rows of $A$ with the columns of $B$.`}</p>
            <p>{`Multiplying $B$ times $A$ mixes the rows of $B$ with the columns of $A$, a completely different pairing of numbers, so there is no reason to expect the same result.`}</p>
          </div>

          <h3>Partitioned (Block) Matrices</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You can split a big matrix into a grid of smaller matrices. Guess whether you can still add and multiply the whole thing using just those smaller pieces.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Adding and multiplying block by block, treating each block like a single entry, gives exactly the same result as working entry by entry on the full matrix.`}</p>
            </details>
          </div>

          <p>{`A partitioned matrix is a matrix cut into smaller submatrices, called blocks, by drawing horizontal and vertical lines between its rows and columns. Each block is itself a small matrix.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`partition a large matrix to simplify it, or to reveal a repeating structure inside it.`}
          </p>

          <p>{`You can add two partitioned matrices block by block, as long as the two matrices are split into blocks the same way. You can also multiply two partitioned matrices block by block, treating each block like a single entry, as long as the blocks line up so every needed block product is defined.`}</p>

          <p>{`Split $A$ and $B$ into four $2\\times2$ blocks each:`}</p>

          <div className="lrn-eq">
            <span>{`$$A = \\begin{bmatrix} 1 & 2 & 1 & 0 \\\\ 0 & 1 & 0 & 1 \\\\ 2 & 0 & 1 & 1 \\\\ 1 & 1 & 0 & 2 \\end{bmatrix} = \\begin{bmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{bmatrix}$$`}</span>
            <span>{`$$B = \\begin{bmatrix} 1 & 0 & 0 & 1 \\\\ 1 & 1 & 1 & 0 \\\\ 1 & 1 & 2 & 0 \\\\ 0 & 1 & 0 & 2 \\end{bmatrix} = \\begin{bmatrix} B_{11} & B_{12} \\\\ B_{21} & B_{22} \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Multiply the blocks the same way you multiply ordinary $2\\times2$ matrices, using the block version of the row-times-column rule:`}</p>

          <div className="lrn-eq">
            <span>{`$$AB = \\begin{bmatrix} A_{11}B_{11}+A_{12}B_{21} & A_{11}B_{12}+A_{12}B_{22} \\\\ A_{21}B_{11}+A_{22}B_{21} & A_{21}B_{12}+A_{22}B_{22} \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Working out the top-left block: $A_{11}B_{11} = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix} = \\begin{bmatrix} 3 & 2 \\\\ 1 & 1 \\end{bmatrix}$ and $A_{12}B_{21} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$. Adding these blocks gives $\\begin{bmatrix} 4 & 3 \\\\ 1 & 2 \\end{bmatrix}$.`}</p>

          <p>{`Carrying out the same steps for the other three blocks gives the full product:`}</p>

          <div className="lrn-eq">
            <span>{`$$AB = \\begin{bmatrix} 4 & 3 & 4 & 1 \\\\ 1 & 2 & 1 & 2 \\\\ 3 & 2 & 2 & 4 \\\\ 2 & 3 & 1 & 5 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Multiplying $A$ and $B$ directly, entry by entry with the ordinary row-times-column rule and ignoring the block lines entirely, gives this exact same matrix. The block method and the ordinary method always agree.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does treating each block like a single number, and multiplying blocks with the row-times-column rule, give the same answer as multiplying every entry directly?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A block is just a grouped-together set of entries, and the row-times-column rule on blocks expands into exactly the same sums of products you would get expanding the same rule entry by entry, just grouped differently.`}</p>
            </details>
          </div>

          <p>{`Block methods simplify work on large matrices, and they reveal structure, such as a block of zeros or a repeated block, that a full entry-by-entry view can hide.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Matrix Multiplication in Context</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you multiply matrix $A$ by a column $b_1$, guess whether the result is a number, a row, or a column.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A column. Multiplying a matrix by a single column vector always produces another column vector, with as many rows as $A$.`}</p>
            </details>
          </div>

          <h3>Products as Linear Combinations</h3>

          <p>{`You can view $AB$ two other useful ways. Viewed by columns, each column of $AB$ is $A$ times the matching column of $B$:`}</p>

          <div className="lrn-eq">
            <span>{`$$AB = A\\begin{bmatrix} b_1 & b_2 & \\dots & b_n \\end{bmatrix} = \\begin{bmatrix} Ab_1 & Ab_2 & \\dots & Ab_n \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Viewed by rows, each row of $AB$ is the matching row of $A$ times $B$. Both views say the same thing. Each column of the product is a linear combination of the other matrix's columns, weighted by the entries of $A$. The same holds for rows, weighted by the entries of $B$.`}</p>

          <p>{`Take $A = \\begin{bmatrix} 1 & 2 \\\\ -1 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 3 & 1 \\\\ 2 & 4 \\end{bmatrix}$. The first column of $AB$ is $A$ times the first column of $B$:`}</p>

          <div className="lrn-eq">
            <span>{`$$A\\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} (1)(3)+(2)(2) \\\\ (-1)(3)+(0)(2) \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ -3 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`This matches column 1 of $AB$ computed the ordinary row-times-column way.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does "A times one column of B" give exactly the matching column of the full product AB?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The row-times-column rule computes each column of $AB$ using only that one column of $B$, so multiplying $A$ by a single column of $B$ in isolation reproduces exactly that column of the full product.`}</p>
            </details>
          </div>

          <h3>Writing a Linear System as a Matrix Equation</h3>

          <p>{`A system of linear equations can be written as one matrix equation, $Ax = b$, where $A$ holds the coefficients, $x$ holds the unknowns as a column, and $b$ holds the right-hand sides as a column.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`rewrite a system as $Ax=b$ when you plan to solve it with matrix tools, like an inverse.`}
          </p>

          <p>{`The system $3x_1 + 2x_2 = 7$, $x_1 - x_2 = 1$ becomes`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{bmatrix} 3 & 2 \\\\ 1 & -1 \\end{bmatrix}\\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Multiplying the left side out with the row-times-column rule returns the original two equations. This confirms the matrix equation says the same thing.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying the coefficient matrix by the unknown column reproduce the original equations?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Row $i$ of the coefficient matrix, times the unknown column, computes the left side of equation $i$. This uses the row-times-column rule. So the matrix product reproduces every equation in the original system, line for line.`}</p>
            </details>
          </div>

          <h3>Matrices as Functions</h3>

          <p>{`A matrix can act like a function: feed it a column $x$, and $Ax$ produces a new column $y$. Geometrically, this can reflect or move points in a plane.`}</p>

          <p>{`Let $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$. For any point $x = \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$, $y = Ax = \\begin{bmatrix} x_1 \\\\ -x_2 \\end{bmatrix}$. This flips the point across the x-axis, since the first coordinate stays the same and the second coordinate flips sign.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <ol className="lrn-list">
                <li>{`The same reflection matrix $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ flips any point across the x-axis.`}</li>
                <li>{`Check it on the point $(3, 2)$: $y = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -2 \\end{bmatrix}$, so $(3, 2)$ lands on $(3, -2)$.`}</li>
                <li>{`Now apply $A$ to the point $(-4, 5)$ yourself, using the same row-times-column rule.`}</li>
                <li>{`Confirm that $(-4, 5)$ lands on $(-4, -5)$: the first coordinate stays the same, and the second flips sign.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-graph">
            <ReflectionMapViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying by this matrix $A$ flip only the second coordinate's sign, leaving the first untouched?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Row 1 of $A$ is $(1,0)$. Multiplying it by a point keeps the first coordinate and adds zero times the second, leaving the first coordinate untouched. Row 2 is $(0,-1)$, which keeps only the negative of the second coordinate.`}</p>
            </details>
          </div>

          <h3>Real-World Applications</h3>

          <p>{`Matrices organize real data too. A fast-food order can be written as a matrix. Rows hold customers, columns hold items (burgers, sodas, fries), and entries show quantities. Multiplying this order matrix by a column of unit prices produces total costs for each customer. It uses the same row-times-column rule from before.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Olga Taussky-Todd (1906 to 1995)</span>
            <div className="lrn-definition-desc">
              <p>{`Helped pioneer using matrices to model flutter in aircraft wings. It was one of the first major engineering uses of matrix algebra.`}</p>
            </div>
          </div>

          <p>{`A voter-demographics table can also be a matrix. Rows hold age groups, columns hold party affiliation (Democrat, Republican, Independent), and entries are fractions of voters. This is called a stochastic matrix when each column's entries add up to 1. Each column then represents 100% of one group. Multiplying a stochastic matrix by a population column, split by age and gender, distributes the population across parties.`}</p>

          <p>{`A grayscale digital image is a matrix too: each entry is a brightness value for one pixel. Scaling the whole matrix by a constant brightens or darkens the picture uniformly. This is why "contrast enhancement" is really just a matrix operation. The same idea drives simple computer-graphics transforms. Multiplying a matrix of pixel coordinates by a reflection matrix moves every point in the image at once. Population-growth models use a related idea: a "transition matrix" predicts how a population splits across life stages after one time period.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A stochastic matrix can be trusted to redistribute a population without losing or gaining people because each column sums to 1.`}</p>
            <p>{`Multiplying by a population column always distributes exactly the whole population across categories, never more and never less.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Rules of Matrix Arithmetic</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Ordinary numbers obey the cancellation law: if $ab = ac$ and $a \\neq 0$, then $b = c$. Guess whether this law also holds for matrices.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It does not hold for matrices in general. $AB = AC$ does not force $B = C$, even when $A$ is not the zero matrix.`}</p>
            </details>
          </div>

          <p>{`Many familiar number laws still work for matrices. Addition is commutative ($A+B=B+A$) and associative ($(A+B)+C=A+(B+C)$). Multiplication distributes over addition: $A(B+C) = AB+AC$ and $(A+B)C = AC+BC$. Multiplication is also associative: $(AB)C = A(BC)$.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`lean on these rules to simplify or rearrange a long matrix expression, just as in ordinary algebra.`}
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Here is why the distributive law $A(B+C)=AB+AC$ holds, shown entry by entry.`}</li>
                <li>{`Start from the definition of the entry $(A(B+C))_{ij}$, and expand $(B+C)_{kj}$ as $b_{kj}+c_{kj}$ inside the sum.`}</li>
                <li>{`Split the sum into two separate sums, one carrying every $b_{kj}$ term and one carrying every $c_{kj}$ term.`}</li>
                <li>{`Recognize each piece as $(AB)_{ij}$ and $(AC)_{ij}$, since both are sums built from the same row-times-column rule.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Because addition and multiplication are associative, you can freely add or remove parentheses in a sum or product of matrices.`}</p>

          <p>{`But not every number law survives. The cancellation law fails for matrices. $AB = AC$ does not force $B = C$, even when $A$ is not the zero matrix. Try $A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$, $C = \\begin{bmatrix} 3 & 5 \\\\ 1 & 1 \\end{bmatrix}$.`}</p>

          <p>{`Multiplying out gives $AB = \\begin{bmatrix} 1 & 1 \\\\ 2 & 2 \\end{bmatrix}$ and $AC = \\begin{bmatrix} 1 & 1 \\\\ 2 & 2 \\end{bmatrix}$. So $AB = AC$, yet $B \\neq C$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does this counterexample prove cancellation cannot be trusted in general, even though it works for many specific matrices?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A single genuine counterexample is enough to disprove a "for all matrices" claim, no matter how many other cases the law happens to hold for. Since $AB=AC$ here but $B \\neq C$, the cancellation law cannot be a general rule.`}</p>
            </details>
          </div>

          <p>{`A related surprise: $AB = 0$ (the zero matrix, every entry 0) does not force $A = 0$ or $B = 0$. Two nonzero matrices can multiply to the zero matrix.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Cancellation fails for matrices because canceling $A$ really means multiplying both sides by the inverse $A^{-1}$, an idea defined shortly.`}</p>
            <p>{`Many matrices have no inverse at all. Without an inverse, there is nothing to cancel by, so the law breaks.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Laws that carry over</span>
              <p>{`Associativity, distributivity, and the zero matrix acting as an additive identity all carry over from ordinary number arithmetic unchanged.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Laws that break</span>
              <p>{`Commutativity of multiplication, the cancellation law, and the zero-product rule all break down for matrices. Never assume a number law holds for matrices; always check it.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Transpose of a Matrix</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you flip a matrix's rows into columns, guess what happens when rows and columns were already equal.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`For a square matrix, the transpose is still the same size, just mirrored across the main diagonal. Some square matrices even equal their own transpose.`}</p>
            </details>
          </div>

          <p>{`The transpose of $A$, written $A^T$, is formed by turning every row of $A$ into a column. The entry relation is`}</p>

          <div className="lrn-eq">
            <span>{`$$(A^T)_{ij} = (A)_{ji}$$`}</span>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`use the transpose to flip a matrix's orientation, such as turning a data row into a column.`}
          </p>

          <p>{`For $A = \\begin{bmatrix} 2 & 5 \\\\ -1 & 0 \\\\ 3 & 4 \\end{bmatrix}$, the transpose is $A^T = \\begin{bmatrix} 2 & -1 & 3 \\\\ 5 & 0 & 4 \\end{bmatrix}$. Row 1 of $A$, which is $(2, 5)$, became column 1 of $A^T$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a matrix with 3 rows and 2 columns end up 2 rows by 3 columns after transposing?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Transposing swaps every row into a column and every column into a row, so the original 3 rows become 3 columns, and the original 2 columns become 2 rows, giving a $2 \\times 3$ result.`}</p>
            </details>
          </div>

          <p>{`A square matrix equal to its own transpose ($A^T = A$) is called symmetric. A square matrix equal to the negative of its transpose ($A^T = -A$) is called skew-symmetric.`}</p>

          <p>{`The transpose obeys its own rules, including one non-obvious one: $(AB)^T = B^T A^T$, where the two factors swap order.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`To prove $(AB)^T = B^T A^T$, compare entries. The entry $((AB)^T)_{ij}$ equals $(AB)_{ji}$, which is row $j$ of $A$ times column $i$ of $B$.`}</li>
                <li>{`The entry $(B^TA^T)_{ij}$ is row $i$ of $B^T$ (which is column $i$ of $B$) times column $j$ of $A^T$ (which is row $j$ of $A$).`}</li>
                <li>{`Both expressions add up the same products, just written in a different order, so they are equal.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Another useful number tied to a square matrix is its trace: the sum of its main-diagonal entries. For $B = \\begin{bmatrix} 4 & 1 & 0 \\\\ -3 & 2 & 7 \\\\ 1 & 1 & 6 \\end{bmatrix}$ from earlier, the trace is $4 + 2 + 6 = 12$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Swapping the order matters in $(AB)^T = B^TA^T$, not $(AB)^T = A^TB^T$, because $AB$ mixes rows of $A$ with columns of $B$.`}</p>
            <p>{`To rebuild that same mixing after flipping everything to columns and rows, the factor order has to reverse too.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Identity Matrix and Defining the Inverse</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Guess what number, when multiplied by any other number, always leaves that number unchanged. Now guess what matrix might play the same role.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The number 1 plays that role for ordinary numbers. For matrices, the identity matrix, with 1s down the diagonal and 0s elsewhere, plays the same role.`}</p>
            </details>
          </div>

          <h3>The Identity Matrix</h3>

          <p>{`The identity matrix $I_n$ is a square matrix with 1s down the main diagonal and 0s everywhere else. Multiplying any matrix by the identity leaves it unchanged: $AI = A$ and $IA = A$, whenever the sizes match.`}</p>

          <p>{`For $I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ and $A = \\begin{bmatrix} 5 & 2 \\\\ 0 & -3 \\end{bmatrix}$ with the matching $I_2$, $AI_2 = \\begin{bmatrix} 5 & 2 \\\\ 0 & -3 \\end{bmatrix} = A$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying by 1s on the diagonal and 0s elsewhere leave every entry of $A$ unchanged?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each output entry sums the row of $A$ against a column of $I$. That column has exactly one 1 in the matching position and zeros everywhere else. So every term except the matching entry of $A$ gets multiplied by 0 and vanishes.`}</p>
            </details>
          </div>

          <h3>Defining the Inverse</h3>

          <p>{`A square matrix $A$ is invertible if there exists a matrix $A^{-1}$ (read "A inverse") such that $AA^{-1} = I$ and $A^{-1}A = I$. If no such matrix exists, $A$ is called singular. Only square matrices can be invertible.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`you need an inverse to "undo" a matrix. This lets you solve $Ax = b$ for $x$ directly.`}
          </p>

          <p>{`To check whether a candidate matrix really is the inverse, multiply it by $A$ both ways and confirm you get $I$ each time. Let $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$ and a candidate $B = \\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$.`}</p>

          <div className="lrn-eq">
            <span>{`$$AB = \\begin{bmatrix} (2)(1)+(1)(-1) & (2)(-1)+(1)(2) \\\\ (1)(1)+(1)(-1) & (1)(-1)+(1)(2) \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I$$`}</span>
          </div>

          <p>{`Checking $BA$ the same way also gives $I$, so $B = A^{-1}$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is it not enough to check only $AB = I$? Why must you also check $BA = I$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because matrix multiplication is not commutative, checking only one order does not guarantee the other order also gives the identity, so both must be verified.`}</p>
            </details>
          </div>

          <p>{`An inverse, when it exists, is unique.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Suppose $B$ and $C$ were both inverses of $A$.`}</li>
                <li>{`Then $B = BI = B(AC) = (BA)C = IC = C$, using the inverse property of $C$ first and of $B$ second.`}</li>
                <li>{`So $B$ and $C$ must be the same matrix, proving the inverse is unique.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Not every square matrix has an inverse. A matrix with an entire column of zeros can never have an inverse. Multiplying it by anything always leaves a zero column in the product. That column can never match a column of the identity matrix. The same failure happens if a whole row is zero.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A zero column or zero row guarantees no inverse exists because $I$ has no zero rows or columns anywhere.`}</p>
            <p>{`A matrix that always produces a zero row or column in its product can never multiply out to $I$.`}</p>
          </div>

          <h3>The 2x2 Inverse Formula</h3>

          <p>{`For a $2\\times2$ matrix $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, there is a direct formula:`}</p>

          <div className="lrn-eq">
            <span>{`$$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}, \\quad \\text{valid only when } ad - bc \\neq 0$$`}</span>
          </div>

          <p>{`The quantity $ad - bc$ is called the determinant of $A$; you will meet it in full later.`}</p>

          <p>{`Find the inverse of $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Here $ad-bc = (2)(3)-(5)(1) = 1$, which is not zero, so $A$ is invertible.`}</p>

          <div className="lrn-eq">
            <span>{`$$A^{-1} = \\frac{1}{1}\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the formula fail completely when $ad-bc = 0$, rather than just giving a wrong answer?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The formula divides by $ad-bc$, and dividing by zero is undefined, so the formula simply cannot produce any matrix at all in that case, rather than producing an inaccurate one.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Arthur Cayley (1821 to 1895)</span>
            <div className="lrn-definition-desc">
              <p>{`One of the founders of matrix algebra. He treated matrices as objects you could add, multiply, and invert. This went beyond earlier use as simple tables of numbers.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Properties of Matrix Inverses</h2>
            </div>
          </div>

          <p>{`When both $A$ and $B$ are invertible, so is their product $AB$, and $(AB)^{-1} = B^{-1}A^{-1}$. The order reverses, just like with the transpose.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`To prove this, check that $(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}IB = B^{-1}B = I$.`}</li>
                <li>{`Similarly, $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$.`}</li>
                <li>{`Since it multiplies both ways to $I$, it must be $(AB)^{-1}$.`}</li>
              </ol>
            </div>
          </div>

          <p>{`See the order-reversal in action. Let $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$ with $A^{-1} = \\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & 1 \\end{bmatrix}$, and $B = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ with $B^{-1} = \\begin{bmatrix} 1 & -1 \\\\ 0 & 1 \\end{bmatrix}$. First $AB = \\begin{bmatrix} 2 & 2 \\\\ 0 & 1 \\end{bmatrix}$, whose inverse (by the $2\\times2$ formula, $\\det = 2$) is:`}</p>

          <div className="lrn-eq">
            <span>{`$$(AB)^{-1} = \\frac{1}{2}\\begin{bmatrix} 1 & -2 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} \\frac{1}{2} & -1 \\\\ 0 & 1 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Now multiply the inverses in reverse order, $B^{-1}A^{-1}$, and the answer matches exactly:`}</p>

          <div className="lrn-eq">
            <span>{`$$B^{-1}A^{-1} = \\begin{bmatrix} 1 & -1 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} \\frac{1}{2} & -1 \\\\ 0 & 1 \\end{bmatrix} = (AB)^{-1}$$`}</span>
          </div>

          <p>{`The order truly matters. Multiplying the inverses the wrong way, $A^{-1}B^{-1}$, gives a different matrix:`}</p>

          <div className="lrn-eq">
            <span>{`$$A^{-1}B^{-1} = \\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & -1 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} \\frac{1}{2} & -\\frac{1}{2} \\\\ 0 & 1 \\end{bmatrix} \\neq (AB)^{-1}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must the order reverse in $(AB)^{-1} = B^{-1}A^{-1}$, and not stay as $A^{-1}B^{-1}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The inverse has to undo $AB$ in the reverse order it was built: first undo the outer operation $B$, then undo $A$. Checking $A^{-1}B^{-1}$ against $AB$ does not multiply out to $I$ in general.`}</p>
            </details>
          </div>

          <p>{`Powers of an invertible matrix follow the same exponent laws as numbers: $A^rA^s = A^{r+s}$ and $(A^r)^s = A^{rs}$, and negative powers make sense too, since $A^{-1}$ exists. For $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$, $A^3 = \\begin{bmatrix} 8 & 0 \\\\ 0 & 27 \\end{bmatrix}$ (cube each diagonal entry), and $A^{-3} = (A^{-1})^3 = \\begin{bmatrix} \\frac{1}{8} & 0 \\\\ 0 & \\frac{1}{27} \\end{bmatrix}$.`}</p>

          <p>{`You can also plug a matrix into a polynomial. For $p(A) = 2A^2 - 3A + 4I$ with $A = \\begin{bmatrix} 1 & 0 \\\\ 2 & -1 \\end{bmatrix}$: first $A^2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, so`}</p>

          <div className="lrn-eq">
            <span>{`$$p(A) = 2\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} - 3\\begin{bmatrix} 1 & 0 \\\\ 2 & -1 \\end{bmatrix} + 4\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 3 & 0 \\\\ -6 & 9 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $4I$ in this polynomial turn into $4$ on the diagonal and $0$ off the diagonal, instead of just adding $4$ to every entry?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$4I$ means scaling the identity matrix by 4, and the identity matrix already has 0s off the diagonal, so scaling keeps those positions at 0 and turns only the diagonal 1s into 4s.`}</p>
            </details>
          </div>

          <p>{`One more rule: for a nonzero scalar $k$, $(kA)^{-1} = \\frac{1}{k}A^{-1}$. Scaling a matrix scales its inverse by the reciprocal. You can check this the same way as the product rule. Multiply $(kA)$ by $\\frac{1}{k}A^{-1}$ and confirm the $k$'s cancel, leaving $AA^{-1}=I$.`}</p>

          <h3>The Inverse of a Transpose</h3>

          <p>{`The inverse and the transpose interact predictably: $(A^T)^{-1} = (A^{-1})^T$.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Since $AA^{-1} = I$, transpose both sides: $(AA^{-1})^T = I^T$.`}</li>
                <li>{`Using $(AB)^T = B^TA^T$, this becomes $(A^{-1})^TA^T = I$.`}</li>
                <li>{`This shows $(A^{-1})^T$ is the inverse of $A^T$.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Check this with $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$, $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$ from before. Then $A^T = \\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}$ and $(A^{-1})^T = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$. Multiplying $A^T(A^{-1})^T$ confirms the product is $I$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does this result follow the same "swap the order" pattern seen in $(AB)^T = B^TA^T$ and $(AB)^{-1} = B^{-1}A^{-1}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`All three rules distribute an operation, transpose or inverse, across a product built from two steps. So undoing or flipping the combined operation always reverses the order the two steps were applied in.`}</p>
            </details>
          </div>

          <p>{`This mirrors the inverse-of-a-product rule closely. Both theorems reverse the order when you distribute an operation (transpose or inverse) across a product.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The reversed order in $(AB)^{-1}=B^{-1}A^{-1}$ works because $(B^{-1}A^{-1})(AB)$ collapses from the inside out.`}</p>
            <p>{`The inner pair $A^{-1}A$ becomes the identity first. Then $B^{-1}B$ becomes the identity too, leaving just $I$.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Finding Inverses of Larger Matrices</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The 2x2 shortcut formula used $ad - bc$. Guess whether a similar single shortcut formula exists for a 4x4 or 5x5 matrix.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No single shortcut formula exists at that size; larger matrices need row reduction (the augmented-identity method) to find an inverse.`}</p>
            </details>
          </div>

          <p>{`The 2x2 shortcut does not scale up. For larger matrices, you find the inverse using row reduction: write $A$ next to the identity matrix as one wide augmented block, $[A \\mid I]$, then use row operations to turn the left side into $I$. Whatever the right side becomes is $A^{-1}$.`}</p>

          <p>{`Row reduction uses three elementary row operations. You will use all three below:`}</p>

          <ul className="lrn-list">
            <li>{`Swap two rows.`}</li>
            <li>{`Multiply a row by a nonzero constant.`}</li>
            <li>{`Add a multiple of one row to another row.`}</li>
          </ul>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Row reduction turns $[A \\mid I]$ into $[I \\mid A^{-1}]$ because every row operation is itself a matrix you multiply by.`}</p>
            <p>{`Those operations multiply together into exactly $A^{-1}$. Applying them to the $I$ on the right side builds that inverse in plain sight.`}</p>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`use row reduction for any matrix bigger than $2\\times2$; it stays efficient at any size.`}
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">GUIDED PRACTICE</span>
              <ol className="lrn-list">
                <li>{`Find the inverse of $A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{bmatrix}$. Start with the augmented block $[A \\mid I]$.`}</li>
                <li>{`Subtract 2 times row 1 from row 2, and 4 times row 1 from row 3, to clear the first column below the top.`}</li>
                <li>{`Continue clearing each column in turn, always working toward $I$ on the left, until the right block stabilizes into $A^{-1}$.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Now carry the method all the way through to a finished inverse. Find $A^{-1}$ for $A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$, starting from the augmented block $[A \\mid I]$.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left[\\begin{array}{ccc|ccc} 2 & 1 & 1 & 1 & 0 & 0 \\\\ 1 & 1 & 1 & 0 & 1 & 0 \\\\ 1 & 1 & 2 & 0 & 0 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Swap row 1 and row 2 to put a 1 in the top-left corner.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left[\\begin{array}{ccc|ccc} 1 & 1 & 1 & 0 & 1 & 0 \\\\ 2 & 1 & 1 & 1 & 0 & 0 \\\\ 1 & 1 & 2 & 0 & 0 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Clear the first column. Subtract 2 times row 1 from row 2, then subtract row 1 from row 3.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left[\\begin{array}{ccc|ccc} 1 & 1 & 1 & 0 & 1 & 0 \\\\ 0 & -1 & -1 & 1 & -2 & 0 \\\\ 0 & 0 & 1 & 0 & -1 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Multiply row 2 by $-1$ so its leading entry becomes 1.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left[\\begin{array}{ccc|ccc} 1 & 1 & 1 & 0 & 1 & 0 \\\\ 0 & 1 & 1 & -1 & 2 & 0 \\\\ 0 & 0 & 1 & 0 & -1 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Clear the entries above each leading 1. Subtract row 3 from row 2, and subtract row 3 from row 1.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left[\\begin{array}{ccc|ccc} 1 & 1 & 0 & 0 & 2 & -1 \\\\ 0 & 1 & 0 & -1 & 3 & -1 \\\\ 0 & 0 & 1 & 0 & -1 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Finally, subtract row 2 from row 1. The left block is now the identity, so the right block is $A^{-1}$.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left[\\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & -1 & 0 \\\\ 0 & 1 & 0 & -1 & 3 & -1 \\\\ 0 & 0 & 1 & 0 & -1 & 1 \\end{array}\\right] \\qquad A^{-1} = \\begin{bmatrix} 1 & -1 & 0 \\\\ -1 & 3 & -1 \\\\ 0 & -1 & 1 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Check the result by multiplying $A\\,A^{-1}$. Row 1 of $A$, which is $(2,1,1)$, against the three columns of $A^{-1}$ gives $(2)(1)+(1)(-1)+(1)(0)=1$, then $(2)(-1)+(1)(3)+(1)(-1)=0$, then $(2)(0)+(1)(-1)+(1)(1)=0$, so the first row of the product is $(1,0,0)$. Rows 2 and 3 give $(0,1,0)$ and $(0,0,1)$ the same way, confirming $A\\,A^{-1}=I$.`}</p>

          <p>{`If at any point an entire row on the left side becomes all zeros, the matrix has no inverse. This is the row-reduction version of the same "zero row" failure you saw earlier.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a zero row appearing midway through row reduction mean the matrix could never reach the identity matrix?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A zero row can never be transformed into a row of the identity matrix using row operations, since row operations cannot create nonzero entries out of an all-zero row.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">David Hilbert (1862 to 1943)</span>
            <div className="lrn-definition-desc">
              <p>{`Remembered for a famous list of 23 unsolved problems he posed in 1900. Several involve linear algebra directly. He also did foundational work connecting matrices to function spaces.`}</p>
            </div>
          </div>

          <p>{`Once you have $A^{-1}$, you can solve a matrix equation $AX = B$ directly: $X = A^{-1}B$.`}</p>

          <p>{`Solve $AX = B$ where $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$ (inverse found earlier as $\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$) and $B = \\begin{bmatrix} 1 \\\\ 4 \\end{bmatrix}$.`}</p>

          <div className="lrn-eq">
            <span>{`$$X = A^{-1}B = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} -17 \\\\ 7 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying both sides of $AX=B$ by $A^{-1}$ on the left isolate $X$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $A^{-1}A=I$, and multiplying by the identity leaves $X$ unchanged, so the $A$ on the left cancels out, leaving $X=A^{-1}B$.`}</p>
            </details>
          </div>

          <p>{`This method models real problems. A pet-food company mixes three feeds, KayDee Food, Pet Pellets, and Rodent Chow, to meet exact protein, fat, and carbohydrate targets for hamsters and gerbils. Each animal's targets give a system of three equations in three unknowns (how much of each feed to use). Writing both animals' systems as $AX = B$ lets you reuse the same coefficient-matrix inverse $A^{-1}$ for both. Only the target column $B$ changes between hamsters and gerbils. This saves work: you compute $A^{-1}$ once, then multiply it by each animal's target column.`}</p>

          <p>{`A similar setup prices cell-phone plans. A company sells standard, deluxe, and super-deluxe phones, each earning a different commission. Given total sales and commission for a few salespeople, you can recover the unknowns (price or commission per tier). Write the data as a matrix equation and invert the coefficient matrix.`}</p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">A Note on Tools</span>
            <p>{`Graphing calculators and computer software can perform all of this matrix algebra directly. Entering a matrix and asking for its inverse, product, or determinant is a single command on most calculators.`}</p>
            <p>{`If you enter a singular matrix, the calculator returns a "singular matrix" error instead of an answer.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Minors, Cofactors, and the Determinant</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You already saw that a 2x2 matrix has a determinant $ad - bc$. Guess how you might extend that idea to a 3x3 matrix, which has 9 entries instead of 4.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Three terms, one for each entry in the row or column you expand along, each multiplied by its own cofactor (which is itself a smaller $2\\times2$ determinant).`}</p>
            </details>
          </div>

          <p>{`For a $2\\times2$ matrix $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the determinant is $\\det(A) = ad - bc$.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`compute a determinant to test invertibility, or when you need it for Cramer's Rule or an area formula.`}
          </p>

          <p>{`For $3\\times3$ and larger matrices, the determinant is built from smaller determinants using minors and cofactors. The minor $M_{ij}$ of entry $a_{ij}$ is the determinant of the smaller matrix left after deleting row $i$ and column $j$ from $A$. The cofactor $C_{ij}$ attaches a sign to the minor:`}</p>

          <div className="lrn-eq">
            <span>{`$$C_{ij} = (-1)^{i+j}M_{ij}$$`}</span>
          </div>

          <p>{`The sign pattern alternates in a checkerboard: $+, -, +, -, \\dots$ starting with $+$ in the top-left corner.`}</p>

          <p>{`Find the minor and cofactor of the entry $a_{21} = -3$ in $B = \\begin{bmatrix} 4 & 1 & 0 \\\\ -3 & 2 & 7 \\\\ 1 & 1 & 6 \\end{bmatrix}$. Deleting row 2 and column 1 leaves $\\begin{bmatrix} 1 & 0 \\\\ 1 & 6 \\end{bmatrix}$, so $M_{21} = (1)(6)-(0)(1) = 6$. The sign for position $(2,1)$ is $(-1)^{2+1} = -1$, so $C_{21} = -6$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does deleting row 2 and column 1 give the correct minor for the entry at position (2,1)?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The minor for an entry is defined as the determinant left after removing that entry's own row and column, so the entry at $(2,1)$ requires removing exactly row 2 and column 1.`}</p>
            </details>
          </div>

          <h3>The Determinant of a 3x3 Matrix by Cofactor Expansion</h3>

          <p>{`The determinant of an $n\\times n$ matrix is found by cofactor expansion. Pick any single row (or column), multiply each entry by its cofactor, and add the results. Expanding a $3\\times3$ matrix along its first row:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$$`}</span>
          </div>

          <p>{`Find $\\det(B)$ for $B = \\begin{bmatrix} 4 & 1 & 0 \\\\ -3 & 2 & 7 \\\\ 1 & 1 & 6 \\end{bmatrix}$, expanding along the first row.`}</p>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} 2 & 7 \\\\ 1 & 6 \\end{vmatrix} = 12-7 = 5 \\qquad C_{12} = -\\begin{vmatrix} -3 & 7 \\\\ 1 & 6 \\end{vmatrix} = -(-18-7) = 25$$`}</span>
            <span>{`$$C_{13} = +\\begin{vmatrix} -3 & 2 \\\\ 1 & 1 \\end{vmatrix} = -3-2 = -5$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\det(B) = (4)(5) + (1)(25) + (0)(-5) = 20 + 25 + 0 = 45$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the entry $a_{13} = 0$ make the third cofactor irrelevant to the final total?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Any cofactor multiplied by a zero entry contributes $0 \\times C_{13} = 0$ to the sum, so it never affects the total no matter what the cofactor itself works out to be.`}</p>
            </details>
          </div>

          <p>{`Cofactor expansion works along any row or column, not just the first row, and always gives the same answer. Expand $\\det(B)$ instead along the first column to check this.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det(B) = a_{11}C_{11} + a_{21}C_{21} + a_{31}C_{31}$$`}</span>
          </div>

          <p>{`Using $C_{11}=5$ and $C_{21}=-6$ (found above), plus $C_{31} = +\\begin{vmatrix} 1 & 0 \\\\ 2 & 7 \\end{vmatrix} = 7$:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det(B) = (4)(5)+(-3)(-6)+(1)(7) = 20+18+7 = 45$$`}</span>
          </div>

          <p>{`The same answer, 45, confirms that any row or column gives the correct determinant.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does expanding along a completely different row or column still produce the exact same number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Every cofactor expansion, no matter which row or column, expands into the same underlying sum of signed products of entries; different expansions just group and order those terms differently.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Emmy Noether (1882 to 1935)</span>
            <div className="lrn-definition-desc">
              <p>{`A pioneering algebraist. Her work on abstract structures underlies much of modern matrix theory. She is best known for her theorem connecting symmetry to conservation laws in physics.`}</p>
            </div>
          </div>

          <h3>Choosing the Best Row or Column</h3>

          <p>{`Since any row or column works, always pick the one with the most zeros. Every zero entry cancels its whole cofactor calculation, saving work.`}</p>

          <p>{`For a sparse $4\\times4$ matrix with three zeros in one column, expand along that column instead of the first row. You only need one nonzero cofactor instead of four.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a zero entry make its entire cofactor unnecessary to compute?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The term contributed by that entry is the entry times its cofactor, and a zero entry multiplies its cofactor to 0 no matter what value the cofactor has, so computing the cofactor is wasted effort.`}</p>
            </details>
          </div>

          <h3>The Determinant of a Triangular Matrix</h3>

          <p>{`A triangular matrix has all zeros either above or below the main diagonal. For a triangular matrix, the determinant is simply the product of the diagonal entries.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Prove this for a lower-triangular $4\\times4$ matrix by repeatedly expanding along the first row.`}</li>
                <li>{`Every entry in the first row except $a_{11}$ is zero, so the expansion collapses to $a_{11}$ times the determinant of the remaining $3\\times3$ triangular matrix.`}</li>
                <li>{`Repeating this three more times peels off $a_{22}$, $a_{33}$, and $a_{44}$ in turn.`}</li>
                <li>{`This leaves the product of all four diagonal entries.`}</li>
              </ol>
            </div>
          </div>

          <p>{`For $A = \\begin{bmatrix} 2 & 0 & 0 \\\\ 5 & -1 & 0 \\\\ 3 & 4 & 6 \\end{bmatrix}$, $\\det(A) = (2)(-1)(6) = -12$, without doing any cofactor expansion at all.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the determinant of a triangular matrix equal the product of its diagonal entries?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Repeated cofactor expansion along the row or column with all the zeros peels off one diagonal entry at a time, since every other term in each expansion is multiplied by zero.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A triangular shape collapses cofactor expansion so much because every expansion along the first row has only one nonzero term, since the rest of that row is zero.`}</p>
            <p>{`Each step reduces to one smaller determinant instead of a sum of several, so the whole computation shrinks to a single product.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Evaluating Determinants by Row Reduction</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Cofactor expansion on a 3x3 matrix takes a handful of steps. Guess how the number of steps grows for a 10x10 matrix.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It grows extremely quickly, faster and faster, which is exactly why row reduction becomes necessary for larger matrices.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cofactor expansion</span>
              <p>{`Easy to do by hand on small matrices, especially ones with a sparse row or column.`}</p>
              <p>{`The number of computations grows faster and faster as the matrix grows, since each cofactor requires computing a smaller determinant.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Row reduction</span>
              <p>{`Stays efficient at any size and is what computers actually use to evaluate determinants.`}</p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`switch to row reduction once a matrix is too large for quick cofactor expansion.`}
          </p>

          <p>{`Elementary row operations change the determinant in predictable ways:`}</p>

          <ul className="lrn-list">
            <li>{`Multiplying one row by a nonzero constant $k$ multiplies the determinant by $k$.`}</li>
            <li>{`Swapping two rows flips the sign of the determinant.`}</li>
            <li>{`Adding a multiple of one row to another row does not change the determinant at all.`}</li>
          </ul>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Adding a multiple of one row to another leaves the determinant untouched for a clean reason.`}</p>
            <p>{`This splits the determinant into the original plus one with two proportional rows. That second piece is always zero.`}</p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Proof sketch for the "multiply a row by $k$" rule on a $3\\times3$ matrix: expand the determinant along the scaled row.`}</li>
                <li>{`Every term in that expansion carries a factor of $k$, since every entry in that row was multiplied by $k$.`}</li>
                <li>{`Factoring $k$ out of every term in the sum leaves exactly $k$ times the original determinant.`}</li>
              </ol>
            </div>
          </div>

          <p>{`These rules connect to elementary matrices, which are the identity matrix with one row operation already applied. The determinant of an elementary matrix depends on that row operation. Swapping two rows gives determinant $-1$. Scaling a row by $k$ gives determinant $k$. Adding a multiple of one row to another gives determinant 1.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does an elementary matrix's own determinant match the effect that row operation has elsewhere?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Multiplying by an elementary matrix on the left performs that exact row operation, and determinants multiply under matrix products, so the elementary matrix's determinant directly scales the result.`}</p>
            </details>
          </div>

          <p>{`A useful shortcut follows from these rules. If a matrix has two proportional rows (or columns), one row is a constant multiple of another. Its determinant is automatically zero. Subtracting the right multiple of one row from the other turns that row entirely to zero. A matrix with a zero row has a determinant of zero. Every cofactor expansion along that row multiplies each term by 0.`}</p>

          <p>{`Evaluate $\\det(A)$ for $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1 \\end{bmatrix}$ using row reduction. Row 2 is exactly twice row 1. Subtracting twice row 1 from row 2 does not change the determinant, but turns row 2 into all zeros.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`A matrix with a zero row has determinant 0, so $\\det(A) = 0$ immediately, without expanding anything.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why did spotting the proportional rows save you from doing any cofactor expansion at all?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Proportional rows guarantee the determinant is zero, so you already know the answer without doing any further computation once you recognize the pattern.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED METHOD</span>
              <ol className="lrn-list">
                <li>{`For a matrix without an obvious shortcut, row-reduce it to an upper-triangular matrix.`}</li>
                <li>{`Track any sign flips from row swaps, and any scaling factors you divided out along the way.`}</li>
                <li>{`Use the triangular-matrix shortcut: the determinant of the triangular result is the product of its diagonal entries.`}</li>
                <li>{`Multiply back in the tracked sign flips and scaling factors to recover the original determinant.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Now carry this method all the way through on a matrix with no shortcut. Find $\\det(A)$ for $A = \\begin{bmatrix} 2 & 1 & 3 \\\\ 1 & -1 & 1 \\\\ 1 & 4 & -2 \\end{bmatrix}$ by row reduction.`}</p>

          <p>{`Swap row 1 and row 2 to put a 1 in the top-left corner. A row swap flips the sign, so track a factor of $-1$.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{bmatrix} 1 & -1 & 1 \\\\ 2 & 1 & 3 \\\\ 1 & 4 & -2 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Clear the first column. Subtract 2 times row 1 from row 2, and subtract row 1 from row 3. Neither step changes the determinant.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{bmatrix} 1 & -1 & 1 \\\\ 0 & 3 & 1 \\\\ 0 & 5 & -3 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Clear the last entry in column 2. Multiply row 3 by 3, which scales the determinant by 3, then subtract 5 times row 2.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{bmatrix} 1 & -1 & 1 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & -14 \\end{bmatrix} \\qquad \\det = (1)(3)(-14) = -42$$`}</span>
          </div>

          <p>{`Now undo the tracked factors. The triangular value $-42$ equals $-1$ from the swap, times 3 from the scaling, times $\\det(A)$. So $-42 = -3\\det(A)$, giving $\\det(A) = 14$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do you divide out the factor of 3, and flip the sign once, to recover the original determinant?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Scaling a row by 3 multiplied the determinant by 3, so you divide by 3 to undo it. The single row swap multiplied it by $-1$, so you flip the sign once more.`}</p>
            </details>
          </div>

          <p>{`Column operations follow the exact same three rules as row operations. This is because $\\det(A) = \\det(A^T)$, and a column operation on $A$ matches a row operation on $A^T$. You can also mix strategies. Use row operations to create zeros in one row, then finish with a cofactor expansion along that now-sparse row.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Properties of the Determinant Function</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If $\\det(A) = 5$, guess $\\det(2A)$ for a $3\\times3$ matrix $A$. Is it $10$, or something else?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It is larger than 10: $\\det(2A)=2^3\\times5=40$, since every one of the 3 rows gets scaled, multiplying the determinant by 2 three separate times.`}</p>
            </details>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`these shortcuts let you find a determinant, or reason about invertibility, without a full expansion.`}
          </p>

          <h3>Scaling, Sums, and Products</h3>

          <p>{`Scaling every entry of an $n \\times n$ matrix $A$ by $k$ scales the determinant by $k^n$, not just $k$:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det(kA) = k^n\\det(A)$$`}</span>
          </div>

          <p>{`For a $3\\times3$ matrix with $\\det(A)=5$, $\\det(2A) = 2^3 \\cdot 5 = 40$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does scaling the whole matrix by $k$ scale the determinant by $k^n$ instead of just $k$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Every one of the $n$ rows gets scaled by $k$, and each row's scaling multiplies the determinant by another factor of $k$, so $n$ rows together contribute $k^n$.`}</p>
            </details>
          </div>

          <p>{`A common mistake is assuming $\\det(A+B) = \\det(A) + \\det(B)$. This is false in general. Try $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$: $\\det(A)=1$, $\\det(B)=2$, sum is 3, but $A+B=\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$, with $\\det(A+B)=6 \\neq 3$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This "obvious" rule fails, even though addition and scalar multiplication both worked entrywise, because the determinant is not built entry by entry.`}</p>
            <p>{`It multiplies entries together across rows and columns. Adding two matrices first, then computing a determinant, mixes terms in a way scalar addition never does.`}</p>
          </div>

          <p>{`There is a narrower version of the addition rule that does hold. If just one row of $A$ is itself a sum of two rows, $u+v$, then $\\det(A)$ splits into two smaller determinants: one with that row replaced by $u$, one with it replaced by $v$, everything else unchanged.`}</p>

          <p>{`For $A = \\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$, split row 1 as $(3,5) = (1,2)+(2,3)$.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det\\begin{bmatrix} 1 & 2 \\\\ 1 & 2 \\end{bmatrix} + \\det\\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix} = 0 + 1 = 1 = \\det(A)$$`}</span>
          </div>

          <p>{`since $\\det(A) = (3)(2)-(5)(1) = 1$. Notice this only works when a single row splits. It does not generalize to $\\det(A+B)$ for two full matrices, which is why the counterexample above still stands.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does splitting only one row keep this identity true, when splitting every row (as in $\\det(A+B)$) breaks it?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Splitting one row only changes one factor in the cofactor expansion along that row, cleanly separating into two determinants. Splitting every row at once mixes entries across rows and columns. That mixing does not correspond to any simple sum.`}</p>
            </details>
          </div>

          <p>{`One rule that does hold for full matrices: $\\det(AB) = \\det(A)\\det(B)$.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`The full proof factors any invertible matrix $A$ into a product of elementary matrices.`}</li>
                <li>{`It shows $\\det(EB) = \\det(E)\\det(B)$ for a single elementary matrix $E$, true because you already know exactly how each type of elementary row operation scales a determinant.`}</li>
                <li>{`Applying this fact once per elementary factor, one at a time, builds up to $\\det(AB)=\\det(A)\\det(B)$ for the full product.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Check this with $A = \\begin{bmatrix} 2 & 0 \\\\ 1 & 1 \\end{bmatrix}$ ($\\det(A)=2$) and $B = \\begin{bmatrix} 1 & 3 \\\\ 0 & 2 \\end{bmatrix}$ ($\\det(B)=2$). $AB = \\begin{bmatrix} 2 & 6 \\\\ 1 & 5 \\end{bmatrix}$, and $\\det(AB) = 10-6 = 4 = \\det(A)\\det(B) = (2)(2)$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does this multiplicative rule hold for products, when the earlier additive rule failed for sums?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The product rule follows from factoring $A$ into elementary matrices. Each of those matrices scales a determinant by its own known factor under multiplication. Addition mixes entries across both matrices at once, in a way that does not correspond to any single scaling factor.`}</p>
            </details>
          </div>

          <p>{`Also, $\\det(A^T) = \\det(A)$, and for an invertible matrix, $\\det(A^{-1}) = \\frac{1}{\\det(A)}$.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Since $AA^{-1}=I$ and $\\det(I)=1$, apply the product rule: $\\det(A)\\det(A^{-1}) = 1$.`}</li>
                <li>{`Dividing both sides by $\\det(A)$, which cannot be zero since $A$ is invertible, gives $\\det(A^{-1}) = 1/\\det(A)$.`}</li>
              </ol>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Determinants and Invertibility</h2>
            </div>
          </div>

          <p>{`The determinant gives an exact test for invertibility: a square matrix $A$ is invertible exactly when $\\det(A) \\neq 0$.`}</p>

          <p>{`For $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}$, row 3 minus twice row 2 equals $-1$ times row 1: $(7,8,9) - 2(4,5,6) = (-1,-2,-3)$. The rows are dependent (one row is a combination of the others), so $\\det(A) = 0$ and $A$ has no inverse.`}</p>

          <p>{`Check a $4\\times4$ case the same way. If any row is a combination of the others, the rows are dependent, and the determinant is zero. The matrix is not invertible, no matter its size.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`The full proof row-reduces $A$ to reduced row-echelon form (the simplest form row operations can reach).`}</li>
                <li>{`If that form is the identity matrix, $A$ is invertible and, tracking the row operations, $\\det(A) \\neq 0$.`}</li>
                <li>{`If reduction produces any zero row before reaching the identity, $A$ is singular, and that same zero row forces $\\det(A)=0$.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does one zero row during row reduction prove both singularity and a zero determinant at once?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A zero row means the reduction can never reach the identity matrix, which proves the matrix is singular. That same zero row also forces any cofactor expansion along it to total zero, proving the determinant is zero too.`}</p>
            </details>
          </div>

          <p>{`Several facts about a square matrix $A$ turn out to be equivalent: if one is true, they are all true.`}</p>

          <ul className="lrn-list">
            <li>{`$A$ is invertible.`}</li>
            <li>{`$\\det(A) \\neq 0$.`}</li>
            <li>{`$Ax = 0$ has only the trivial solution $x = 0$.`}</li>
            <li>{`Row-reducing $A$ all the way gives the identity matrix.`}</li>
            <li>{`$A$ can be written as a product of elementary matrices.`}</li>
            <li>{`$Ax = b$ has exactly one solution, for every possible column $b$.`}</li>
          </ul>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`One true statement in this list guarantees all the others are true because each statement was proven, earlier in this lesson, to force at least one of the others.`}</p>
            <p>{`This chains all six statements into a single equivalence: proving any one of them proves every one of them.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Adjoint and Its Inverse Formula</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You built a cofactor for every entry of a matrix. Guess what happens if you collect all those cofactors into a matrix of their own, then transpose it.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You get the adjoint of the matrix, which then connects back to the inverse through the formula $A^{-1}=\\frac{1}{\\det(A)}\\text{adj}(A)$.`}</p>
            </details>
          </div>

          <p>{`The adjoint of $A$, written $\\text{adj}(A)$, is the transpose of the matrix formed by all of $A$'s cofactors. In other words, replace every entry with its own cofactor, then transpose the result.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`the adjoint gives a direct formula for the inverse. It is useful for deriving further theory, though not the fastest way to compute a large inverse by hand.`}
          </p>

          <p>{`Find $\\text{adj}(A)$ for $A = \\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 1 \\\\ 2 & 0 & 1 \\end{bmatrix}$. Compute a cofactor for each entry. Here are three of the nine, each a signed $2\\times2$ minor:`}</p>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} 1 & 1 \\\\ 0 & 1 \\end{vmatrix} = 1 \\qquad C_{12} = -\\begin{vmatrix} 0 & 1 \\\\ 2 & 1 \\end{vmatrix} = -(0-2) = 2 \\qquad C_{21} = -\\begin{vmatrix} 2 & 0 \\\\ 0 & 1 \\end{vmatrix} = -(2-0) = -2$$`}</span>
          </div>

          <p>{`The adjoint is the transpose of the cofactor matrix. So each cofactor $C_{ij}$ lands at position $(j, i)$. Thus $C_{11}=1$ stays at $(1,1)$, $C_{12}=2$ moves to $(2,1)$, and $C_{21}=-2$ moves to $(1,2)$. Computing all nine cofactors and transposing gives:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\text{adj}(A) = \\begin{bmatrix} 1 & -2 & 2 \\\\ 2 & 1 & -1 \\\\ -2 & 4 & 1 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the adjoint transpose the cofactor matrix, instead of just leaving the cofactors where they started?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The transpose step is what makes the adjoint identity $A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$ line up correctly. It matches each row of $A$ against the matching column of cofactors, rather than the matching row.`}</p>
            </details>
          </div>

          <p>{`A striking fact connects the adjoint back to the determinant: $A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`The diagonal entries of $A \\cdot \\text{adj}(A)$ are each a cofactor expansion of $\\det(A)$ along one row, so they all equal $\\det(A)$.`}</li>
                <li>{`The off-diagonal entries are trickier: each one is a sum of the form $\\sum_k a_{ik}C_{jk}$ for $i \\neq j$.`}</li>
                <li>{`Replacing row $j$ of $A$ with a duplicate of row $i$ does not change which cofactors $C_{jk}$ are, but it does create a matrix with two identical rows, which must have determinant 0.`}</li>
                <li>{`That modified determinant, expanded along the duplicated row, is exactly $\\sum_k a_{ik}C_{jk}$, so this sum must be 0 for $i \\neq j$.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Dividing both sides of $A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$ by $\\det(A)$ (valid whenever $\\det(A) \\neq 0$) gives the inverse formula:`}</p>

          <div className="lrn-eq">
            <span>{`$$A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A)$$`}</span>
          </div>

          <p>{`First find $\\det(A)$ for that same matrix, expanding along the first row.`}</p>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} 1 & 1 \\\\ 0 & 1 \\end{vmatrix} = 1 \\qquad C_{12} = -\\begin{vmatrix} 0 & 1 \\\\ 2 & 1 \\end{vmatrix} = -(0-2) = 2 \\qquad C_{13} = +\\begin{vmatrix} 0 & 1 \\\\ 2 & 0 \\end{vmatrix} = 0-2 = -2$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\det(A) = (1)(1)+(2)(2)+(0)(-2) = 1+4+0 = 5$$`}</span>
          </div>

          <p>{`You can check this against $A \\cdot \\text{adj}(A)$ directly: multiplying row 1 of $A$, $(1,2,0)$, by column 1 of $\\text{adj}(A)$, $(1,2,-2)$, gives $(1)(1)+(2)(2)+(0)(-2)=5$, matching $\\det(A)$ on the diagonal.`}</p>

          <p>{`Using $\\text{adj}(A)$ found above and $\\det(A) = 5$ for that same matrix:`}</p>

          <div className="lrn-eq">
            <span>{`$$A^{-1} = \\frac{1}{5}\\begin{bmatrix} 1 & -2 & 2 \\\\ 2 & 1 & -1 \\\\ -2 & 4 & 1 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does dividing every entry of $\\text{adj}(A)$ by the same number, $\\det(A)$, still give a matrix that satisfies $AA^{-1}=I$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Dividing both sides of $A \\cdot \\text{adj}(A)=\\det(A) \\cdot I$ by $\\det(A)$ turns the left side into $A$ times $\\frac{1}{\\det(A)}\\text{adj}(A)$, and the right side into just $I$, which is exactly the defining property of an inverse.`}</p>
            </details>
          </div>

          <p>{`This same relationship, $A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$, also proves something else. A triangular matrix's inverse, when it exists, is triangular too, with the same upper or lower shape.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The off-diagonal entries of $A \\cdot \\text{adj}(A)$ vanish because each one computes a determinant with a repeated row.`}</p>
            <p>{`A matrix with two identical rows always has determinant zero. Only the diagonal survives, and each diagonal entry equals $\\det(A)$.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">The adjoint formula</span>
              <p>{`$A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A)$ is a genuine closed-form formula.`}</p>
              <p>{`It is useful for proving further facts about inverses, like the triangular-matrix result above. But computing every cofactor for a large matrix is slow.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Augmented row reduction</span>
              <p>{`For any matrix bigger than $3\\times3$, the augmented row-reduction method from earlier is the far more efficient choice.`}</p>
              <p>{`It is also what calculators and computers actually run.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Cramer's Rule</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You can already solve $Ax = b$ by computing $A^{-1}$ and multiplying. Guess whether there might be a way to find just one unknown, say $x_2$, without computing the full inverse.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Cramer's Rule finds a single unknown directly using two determinants, without ever computing the full inverse matrix.`}</p>
            </details>
          </div>

          <p>{`Cramer's Rule gives each unknown in a linear system directly, using determinants. For a system $Ax=b$ with $\\det(A) \\neq 0$, build $A_j$ by replacing column $j$ of $A$ with the column $b$. Then`}</p>

          <div className="lrn-eq">
            <span>{`$$x_j = \\frac{\\det(A_j)}{\\det(A)}$$`}</span>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`reach for Cramer's Rule when you need one specific unknown, or when you already have $\\det(A)$.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Gabriel Cramer (1704 to 1752)</span>
            <div className="lrn-definition-desc">
              <p>{`A Swiss mathematician who published this rule in 1750. Similar results had appeared earlier. It remains the standard name for solving linear systems by determinants.`}</p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">PROOF SKETCH</span>
              <ol className="lrn-list">
                <li>{`Cramer's Rule follows directly from the inverse formula: since $x = A^{-1}b = \\frac{1}{\\det(A)}\\text{adj}(A)b$, look at just the $j$-th entry of this product.`}</li>
                <li>{`It works out to $\\frac{1}{\\det(A)}$ times a cofactor expansion, which is exactly $\\det(A_j)$, the determinant of $A$ with column $j$ replaced by $b$.`}</li>
              </ol>
            </div>
          </div>

          <p>{`Solve the two-variable system $2x + y = 5$, $x - 3y = -1$ using Cramer's Rule. Here $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & -3 \\end{bmatrix}$, so $\\det(A) = -6-1 = -7$.`}</p>

          <div className="lrn-eq">
            <span>{`$$A_x = \\begin{bmatrix} 5 & 1 \\\\ -1 & -3 \\end{bmatrix} \\qquad \\det(A_x) = -15+1 = -14 \\qquad x = \\frac{-14}{-7} = 2$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$A_y = \\begin{bmatrix} 2 & 5 \\\\ 1 & -1 \\end{bmatrix} \\qquad \\det(A_y) = -2-5 = -7 \\qquad y = \\frac{-7}{-7} = 1$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does replacing an entire column with $b$, rather than a single entry, correctly isolate one unknown?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`That column holds the coefficients of one unknown across all the equations. So replacing it with the constants column captures how that one unknown relates to the whole system.`}</p>
            </details>
          </div>

          <p>{`The same idea extends to three variables. Solve $x+y+z=6$, $2y+5z=-4$, $2x+5y-z=27$.`}</p>

          <div className="lrn-eq">
            <span>{`$$A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 2 & 5 \\\\ 2 & 5 & -1 \\end{bmatrix}$$`}</span>
          </div>

          <p>{`Find $\\det(A)$ by expanding along the first row.`}</p>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} 2 & 5 \\\\ 5 & -1 \\end{vmatrix} = -2-25 = -27 \\qquad C_{12} = -\\begin{vmatrix} 0 & 5 \\\\ 2 & -1 \\end{vmatrix} = -(0-10) = 10 \\qquad C_{13} = +\\begin{vmatrix} 0 & 2 \\\\ 2 & 5 \\end{vmatrix} = 0-4 = -4$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\det(A) = (1)(-27)+(1)(10)+(1)(-4) = -27+10-4 = -21$$`}</span>
          </div>

          <p>{`Now replace each column of $A$ with $b = \\begin{bmatrix} 6 \\\\ -4 \\\\ 27 \\end{bmatrix}$ in turn, and expand each new determinant along its first row too.`}</p>

          <div className="lrn-eq">
            <span>{`$$A_x = \\begin{bmatrix} 6 & 1 & 1 \\\\ -4 & 2 & 5 \\\\ 27 & 5 & -1 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} 2 & 5 \\\\ 5 & -1 \\end{vmatrix} = -27 \\qquad C_{12} = -\\begin{vmatrix} -4 & 5 \\\\ 27 & -1 \\end{vmatrix} = -(4-135) = 131 \\qquad C_{13} = +\\begin{vmatrix} -4 & 2 \\\\ 27 & 5 \\end{vmatrix} = -20-54 = -74$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\det(A_x) = (6)(-27)+(1)(131)+(1)(-74) = -162+131-74 = -105$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$A_y = \\begin{bmatrix} 1 & 6 & 1 \\\\ 0 & -4 & 5 \\\\ 2 & 27 & -1 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} -4 & 5 \\\\ 27 & -1 \\end{vmatrix} = 4-135 = -131 \\qquad C_{12} = -\\begin{vmatrix} 0 & 5 \\\\ 2 & -1 \\end{vmatrix} = -(0-10) = 10 \\qquad C_{13} = +\\begin{vmatrix} 0 & -4 \\\\ 2 & 27 \\end{vmatrix} = 0+8 = 8$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\det(A_y) = (1)(-131)+(6)(10)+(1)(8) = -131+60+8 = -63$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$A_z = \\begin{bmatrix} 1 & 1 & 6 \\\\ 0 & 2 & -4 \\\\ 2 & 5 & 27 \\end{bmatrix}$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$C_{11} = +\\begin{vmatrix} 2 & -4 \\\\ 5 & 27 \\end{vmatrix} = 54+20 = 74 \\qquad C_{12} = -\\begin{vmatrix} 0 & -4 \\\\ 2 & 27 \\end{vmatrix} = -(0+8) = -8 \\qquad C_{13} = +\\begin{vmatrix} 0 & 2 \\\\ 2 & 5 \\end{vmatrix} = 0-4 = -4$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\det(A_z) = (1)(74)+(1)(-8)+(6)(-4) = 74-8-24 = 42$$`}</span>
          </div>

          <p>{`So $x = \\dfrac{-105}{-21} = 5$, $y = \\dfrac{-63}{-21} = 3$, and $z = \\dfrac{42}{-21} = -2$. Check the answer in all three original equations: $5+3-2=6$, $2(3)+5(-2)=6-10=-4$, and $2(5)+5(3)-(-2)=10+15+2=27$. Every equation holds true.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does Cramer's Rule need a full determinant per unknown, while the inverse method reuses one inverse for all?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Cramer's Rule builds a brand new matrix $A_j$ for every unknown, with a different column replaced. So it needs a new determinant each time. The inverse $A^{-1}$, by contrast, is reused unchanged for every unknown once computed.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Cramer's Rule works because replacing column $j$ with $b$ captures how that one unknown drives the system.`}</p>
            <p>{`Expanding $x = A^{-1}b$ one entry at a time produces exactly $\\det(A_j)$ divided by $\\det(A)$.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cramer's Rule</span>
              <p>{`A clean, explicit formula, convenient if you only need one variable, or already know $\\det(A)$.`}</p>
              <p>{`It requires computing $n+1$ separate $n\\times n$ determinants for a system of $n$ equations. That becomes far slower than Gaussian elimination (solving by systematic row operations) once $n$ grows past about 3.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Gaussian elimination</span>
              <p>{`Scales much better for larger systems and is the method computers use by default.`}</p>
            </div>
          </div>

          <p>{`Cramer's Rule also solves real modeling problems. A railway engineer surveys three points along a bridge arch and wants the parabola $y = ax^2+bx+c$ passing through all three. Plugging each surveyed point into the parabola equation gives three linear equations in the unknowns $a$, $b$, and $c$. Cramer's Rule then solves these directly using the three points' coordinates.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do three surveyed points give exactly enough equations to pin down all three parabola coefficients?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each point gives one linear equation in the three unknowns $a$, $b$, and $c$, so three points give exactly three equations, precisely enough to solve for three unknowns using Cramer's Rule.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Determinants and Geometry: Triangle Area and Collinearity</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Guess whether three randomly chosen points are more likely, or less likely, to lie on one straight line.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Less likely. Collinearity is a special, exact condition (the area determinant equals precisely zero), which almost never happens for randomly chosen points.`}</p>
            </details>
          </div>

          <p>{`The area of a triangle with vertices $(a_1,b_1)$, $(a_2,b_2)$, $(a_3,b_3)$ is given by a determinant:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\mathcal{A} = \\pm\\frac{1}{2}\\begin{vmatrix} a_1 & b_1 & 1 \\\\ a_2 & b_2 & 1 \\\\ a_3 & b_3 & 1 \\end{vmatrix}$$`}</span>
          </div>

          <p>{`You choose the sign that makes the area positive, since area itself cannot be negative.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`use this formula when you know a triangle's vertex coordinates but not its base and height.`}
          </p>

          <p>{`Find the area of the triangle with vertices $(1,1)$, $(4,1)$, and $(2,5)$.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 4 & 1 & 1 \\\\ 2 & 5 & 1 \\end{vmatrix} = 1(1-5) - 1(4-2) + 1(20-2) = -4-2+18 = 12$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\mathcal{A} = \\frac{1}{2}|12| = 6$$`}</span>
          </div>

          <div className="lrn-graph">
            <TriangleAreaViz />
          </div>

          <div className="lrn-graph">
            <UnitSquareTransformViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the same $3\\times3$ determinant structure that computes a determinant also happen to compute a triangle's area?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The vertex-matrix determinant measures the signed area of the parallelogram built from the vertex-difference vectors. Half of its absolute value is exactly the triangle's area.`}</p>
            </details>
          </div>

          <p>{`A land surveyor measuring a triangular plot can use exactly this formula. Plug in the three corner coordinates from a survey, and the determinant gives the plot's area directly. No angle or height measurement is needed.`}</p>

          <p>{`This formula hides a bonus fact. If the three points are collinear (all on one line), the "triangle" they form is flat, with zero area. So the determinant itself equals zero exactly when three points are collinear:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{vmatrix} a_1 & b_1 & 1 \\\\ a_2 & b_2 & 1 \\\\ a_3 & b_3 & 1 \\end{vmatrix} = 0 \\iff \\text{the three points are collinear}$$`}</span>
          </div>

          <p>{`A closely related fact: the equation of the line through two fixed points $(a_1,b_1)$ and $(a_2,b_2)$ can be written as`}</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{vmatrix} x & y & 1 \\\\ a_1 & b_1 & 1 \\\\ a_2 & b_2 & 1 \\end{vmatrix} = 0$$`}</span>
          </div>

          <p>{`Any point $(x,y)$ satisfying this equation lies on the line through the two fixed points. Setting the determinant to zero is exactly the collinearity condition, applied here to three points.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Zero area means the three points are collinear because a triangle collapses to a flat line segment exactly when its three corners stop spreading in two directions.`}</p>
            <p>{`That is precisely what "lying on one line" means: no spread in a second direction.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>A Preview of Eigenvalues and Eigenvectors</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Most vectors change direction when multiplied by a matrix. Guess whether there might be some special vectors that only get scaled, without changing direction at all.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. These are called eigenvectors; they get scaled by their matching eigenvalue but never change direction.`}</p>
            </details>
          </div>

          <p>{`For a square matrix $A$, some special systems have the form $Ax = \\lambda x$, where $\\lambda$ (the Greek letter lambda) is a number, and $x$ is a nonzero column. Here, multiplying $x$ by $A$ produces the same vector $x$, just stretched or shrunk by the factor $\\lambda$, with no change in direction.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`this idea reappears constantly in later study of matrices, from dynamic systems to data analysis. Treat this section as a first look, not the full story.`}
          </p>

          <p>{`Rewriting $Ax = \\lambda x$ as $(\\lambda I - A)x = 0$ turns this into an ordinary linear system. For it to have a nonzero solution $x$, the coefficient matrix $\\lambda I - A$ must be singular, meaning`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det(\\lambda I - A) = 0$$`}</span>
          </div>

          <p>{`This is called the characteristic equation of $A$. Its solutions are called the eigenvalues of $A$; the matching nonzero vectors $x$ are called eigenvectors.`}</p>

          <p>{`Find the eigenvalues of $A = \\begin{bmatrix} 1 & 4 \\\\ 2 & 3 \\end{bmatrix}$. First form $\\lambda I - A = \\begin{bmatrix} \\lambda-1 & -4 \\\\ -2 & \\lambda-3 \\end{bmatrix}$.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\det(\\lambda I - A) = (\\lambda-1)(\\lambda-3) - 8 = \\lambda^2-4\\lambda+3-8 = \\lambda^2-4\\lambda-5$$`}</span>
          </div>

          <p>{`Setting this to zero: $\\lambda^2-4\\lambda-5=0$, which factors as $(\\lambda-5)(\\lambda+1)=0$, giving $\\lambda = 5$ or $\\lambda = -1$.`}</p>

          <div className="lrn-graph">
            <EigenvectorViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the characteristic equation come from setting a determinant to zero, rather than solving $Ax=\\lambda x$ directly for $x$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Rewriting the equation as $(\\lambda I-A)x=0$ shows a nonzero solution $x$ exists only when the coefficient matrix $\\lambda I-A$ is singular. Singularity is tested by a determinant equal to zero.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`$\\lambda I - A$ must be singular for a nonzero eigenvector to exist because an invertible matrix only ever sends the zero vector to zero.`}</p>
            <p>{`A singular matrix is the only kind that can send some nonzero vector to zero, which is exactly what $(\\lambda I - A)x=0$ requires.`}</p>
          </div>

          <p>{`Eigenvalues and eigenvectors are introduced here only briefly. They form their own major topic, building directly on everything covered in this lesson: determinants, matrix equations, and invertibility.`}</p>
        </>
      ]
    },
    practice: [
      {
        q: `What is the size of a matrix with 5 rows and 2 columns?`,
        a: `Its size is 5x2 (rows first, then columns). This matrix has 5 rows and 2 columns, so by the size convention, rows come before columns, giving 5x2.`
      },
      {
        q: `What is $I_3$, the 3x3 identity matrix?`,
        a: `$\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{bmatrix}$, with 1s on the main diagonal and 0s everywhere else.`
      },
      {
        q: `If $\\det(A)=3$ for a 2x2 matrix, what is $\\det(2A)$?`,
        a: `$\\det(2A)=2^2\\cdot3=12$, using $\\det(kA)=k^n\\det(A)$ with $n=2$.`
      },
      {
        q: `Is the product AB defined if A is 3x2 and B is 4x3?`,
        a: `No. The inside numbers must match: A has 2 columns but B has 4 rows, so they do not match, and AB is undefined.`
      },
      {
        q: `Solve $2x+y=5$, $x-3y=-1$ using Cramer's Rule.`,
        a: `$x=2$, $y=1$. Here $\\det(A)=-7$. Replacing column 1 with the constants gives $\\det(A_x)=-14$, so $x=-14/-7=2$. Replacing column 2 gives $\\det(A_y)=-7$, so $y=-7/-7=1$.`
      },
      {
        q: `Matrix $\\begin{bmatrix}x&2\\\\5&y\\end{bmatrix}$ equals $\\begin{bmatrix}3&2\\\\5&-4\\end{bmatrix}$. Find x and y.`,
        a: `$x=3$ and $y=-4$. Matrix equality means every matching entry must be equal, so comparing position by position gives these values directly.`
      },
      {
        q: `Find $\\det(A)$ for $A=\\begin{bmatrix}3&5\\\\1&2\\end{bmatrix}$.`,
        a: `$\\det(A)=(3)(2)-(5)(1)=1$.`
      },
      {
        q: `Does matrix addition follow the commutative law, A+B=B+A?`,
        a: `Yes, matrix addition is commutative, since adding entries in either order gives the same sum at every position.`
      },
      {
        q: `Guess: are three points chosen completely at random more likely, or less likely, to be exactly collinear?`,
        a: `Less likely. Collinearity is a special, exact condition (the area determinant equals precisely zero), which almost never happens for randomly chosen points.`
      },
      {
        q: `Find the transpose of $\\begin{bmatrix}1&4\\\\2&5\\\\3&6\\end{bmatrix}$.`,
        a: `$\\begin{bmatrix}1&2&3\\\\4&5&6\\end{bmatrix}$. Each row of the original becomes a column: row 1 (1,4) becomes column 1, row 2 (2,5) becomes column 2, row 3 (3,6) becomes column 3.`
      },
      {
        q: `What equation do you solve to find the eigenvalues of a matrix A?`,
        a: `The characteristic equation, $\\det(\\lambda I - A)=0$.`
      },
      {
        q: `In matrix $A=\\begin{bmatrix}3&7\\\\-1&4\\end{bmatrix}$, what is entry $a_{12}$?`,
        a: `$a_{12}=7$. The subscripts mean row 1, column 2; row 1 is (3,7), and its second entry is 7.`
      },
      {
        q: `Verify that $B=\\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix}$ is the inverse of $A=\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}$.`,
        a: `Yes. Multiplying $AB$ gives $\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$, and multiplying $BA$ also gives the identity matrix, so B is indeed $A^{-1}$.`
      },
      {
        q: `If $\\det(A)=5$ and $\\det(B)=-2$, what is $\\det(AB)$?`,
        a: `$\\det(AB)=\\det(A)\\det(B)=5\\times(-2)=-10$.`
      },
      {
        q: `If A is 2x3 and B is 3x5, what size is AB?`,
        a: `AB is 2x5. The result takes the outer numbers: A's rows (2) and B's columns (5).`
      },
      {
        q: `What condition must $\\det(A)$ satisfy for Cramer's Rule to work?`,
        a: `$\\det(A)\\neq0$. If the determinant is zero, the system either has no solution or infinitely many, and Cramer's Rule cannot be applied.`
      },
      {
        q: `Two matrices have the same four numbers, 1, 2, 3, 4, but arranged in different positions. Are they equal?`,
        a: `No. Matrix equality requires every entry in the same position to match, not just the same numbers to appear somewhere in the matrix.`
      },
      {
        q: `Find the cofactor $C_{12}$ of $\\begin{bmatrix}1&2&0\\\\0&1&1\\\\2&0&1\\end{bmatrix}$.`,
        a: `$C_{12}=2$. Deleting row 1 and column 2 leaves $\\begin{bmatrix}0&1\\\\2&1\\end{bmatrix}$, with minor $M_{12}=(0)(1)-(1)(2)=-2$. The sign at position (1,2) is negative, so $C_{12}=-(-2)=2$.`
      },
      {
        q: `A matrix's row 2 is exactly 3 times its row 1. What is its determinant?`,
        a: `Zero. Proportional rows can be reduced to a zero row using a row operation that does not change the determinant, and a zero row forces the determinant to zero.`
      },
      {
        q: `A square matrix satisfies $A^T=A$. What is this type of matrix called?`,
        a: `A symmetric matrix. Its entries mirror across the main diagonal, so transposing it leaves it unchanged.`
      },
      {
        q: `A matrix has only one column and four rows. What do you call this kind of matrix?`,
        a: `A column matrix. Any matrix with a single column, regardless of how many rows, is called a column matrix.`
      },
      {
        q: `Find $A^{-1}$ for $A=\\begin{bmatrix}2&5\\\\1&3\\end{bmatrix}$ using the 2x2 formula.`,
        a: `$A^{-1}=\\begin{bmatrix}3&-5\\\\-1&2\\end{bmatrix}$. Here $ad-bc=(2)(3)-(5)(1)=1$, so $A^{-1}=\\frac{1}{1}\\begin{bmatrix}3&-5\\\\-1&2\\end{bmatrix}$.`
      },
      {
        q: `What is the trace of $\\begin{bmatrix}5&2&0\\\\1&-3&4\\\\6&7&2\\end{bmatrix}$?`,
        a: `The trace is $5+(-3)+2=4$, the sum of the main-diagonal entries.`
      },
      {
        q: `A calculator reports a "singular matrix" error when you ask it to invert a matrix. What does this tell you about that matrix's determinant?`,
        a: `Its determinant must be zero, since a singular matrix has no inverse, and determinant zero is exactly the condition for a matrix to be singular.`
      },
      {
        q: `What operation turns a matrix of cofactors into the adjoint of A?`,
        a: `Transposing it. The adjoint is the transpose of the cofactor matrix.`
      },
      {
        q: `To find $x_2$ using Cramer's Rule, which column of A do you replace with b?`,
        a: `Column 2, the column matching the unknown $x_2$.`
      },
      {
        q: `If $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=\\begin{bmatrix}2a&b+1\\\\c&2d-3\\end{bmatrix}$, solve for a and d.`,
        a: `$a=0$ and $d=3$. Setting matching entries equal gives $a=2a$, so $a=0$, and $d=2d-3$, so $d=3$.`
      },
      {
        q: `A 4x4 matrix has three zero entries in its second column. Which row or column should you expand along to minimize work?`,
        a: `Expand along the second column, since each zero entry cancels an entire cofactor calculation, leaving only one nonzero term to compute.`
      },
      {
        q: `You swap two rows of a matrix during row reduction. What happens to the determinant?`,
        a: `The determinant's sign flips; swapping two rows multiplies the determinant by -1.`
      },
      {
        q: `If $\\det(A)=7$ for an invertible matrix A, what is $\\det(A^{-1})$?`,
        a: `$\\det(A^{-1})=\\frac{1}{7}$, using $\\det(A^{-1})=\\frac{1}{\\det(A)}$.`
      },
      {
        q: `If $\\det(A)=1$ and $\\text{adj}(A)=\\begin{bmatrix}1&-2\\\\3&1\\end{bmatrix}$, find $A^{-1}$.`,
        a: `$A^{-1}=\\frac{1}{1}\\begin{bmatrix}1&-2\\\\3&1\\end{bmatrix}=\\begin{bmatrix}1&-2\\\\3&1\\end{bmatrix}$.`
      },
      {
        q: `A land surveyor measures a triangular plot's three corner coordinates. How can they find the plot's area without measuring any height or angle?`,
        a: `Using the determinant area formula directly on the three coordinate pairs, since it computes area from coordinates alone.`
      },
      {
        q: `Find the size of a matrix product AB when A is 4x2 and B is 2x4. Are both AB and BA defined, and what sizes result?`,
        a: `Yes, both are defined here. AB is 4x4 and BA is 2x2, showing that even when both products exist, they can have completely different sizes.`
      },
      {
        q: `Add $\\begin{bmatrix}2&-3\\\\0&5\\end{bmatrix}+\\begin{bmatrix}1&4\\\\-2&1\\end{bmatrix}$.`,
        a: `$\\begin{bmatrix}3&1\\\\-2&6\\end{bmatrix}$. Add corresponding entries: 2+1=3, -3+4=1, 0+(-2)=-2, 5+1=6.`
      },
      {
        q: `In the equation $Ax=\\lambda x$, what does $\\lambda$ represent?`,
        a: `A scalar (the eigenvalue) that stretches or shrinks the vector x without changing its direction, when x is multiplied by A.`
      },
      {
        q: `Find the area of the triangle with vertices (1,1), (4,1), (2,5).`,
        a: `6 square units. The determinant of the vertex matrix (with a column of 1s) is 12, and the area is half its absolute value: $\\frac{1}{2}|12|=6$.`
      },
      {
        q: `For $A=\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}$, find $A^3$.`,
        a: `$\\begin{bmatrix}8&0\\\\0&27\\end{bmatrix}$. For a diagonal matrix, powers apply directly to each diagonal entry: $2^3=8$ and $3^3=27$.`
      },
      {
        q: `A matrix has an entire column of zeros. Can it have an inverse?`,
        a: `No. Multiplying it by anything always leaves a zero column in the product, which can never match a column of the identity matrix, so it cannot be invertible.`
      },
      {
        q: `Solve $3X + A = B$ for $X$, where $A=\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}$ and $B=\\begin{bmatrix}7&3\\\\5&4\\end{bmatrix}$.`,
        a: `$X=\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}$. Subtract A from both sides to get $3X=B-A=\\begin{bmatrix}6&3\\\\3&3\\end{bmatrix}$, then divide entry by entry by 3.`
      },
      {
        q: `Two different people expand the same 3x3 determinant, one along the first row and one along the second column. Will they get the same answer?`,
        a: `Yes. Cofactor expansion gives the same determinant no matter which row or column you expand along.`
      },
      {
        q: `You multiply one row of a matrix by 5 before computing the determinant. How does this affect the determinant of the original matrix, if you want to recover it?`,
        a: `You must divide the new determinant by 5 to recover the original, since scaling a row by 5 scales the determinant by 5 too.`
      },
      {
        q: `Given $(AB)^{-1}=B^{-1}A^{-1}$, if $A^{-1}=\\begin{bmatrix}1&0\\\\0&2\\end{bmatrix}$ and $B^{-1}=\\begin{bmatrix}3&1\\\\0&1\\end{bmatrix}$, find $(AB)^{-1}$.`,
        a: `$(AB)^{-1}=B^{-1}A^{-1}=\\begin{bmatrix}3&1\\\\0&1\\end{bmatrix}\\begin{bmatrix}1&0\\\\0&2\\end{bmatrix}=\\begin{bmatrix}3&2\\\\0&2\\end{bmatrix}$, multiplying in that specific order.`
      },
      {
        q: `A pet food company solves two feed-mixing problems for hamsters and gerbils, both using the same three feed types. Why can they reuse the same coefficient-matrix inverse for both animals?`,
        a: `Because both problems share the exact same coefficient matrix A; only the target column B (protein, fat, carb goals) changes between the two animals, so $A^{-1}$ only needs to be computed once.`
      },
      {
        q: `If $(AB)^T = B^TA^T$, what is $(ABC)^T$ for three matrices?`,
        a: `$(ABC)^T = C^TB^TA^T$. Applying the swap-order rule twice, first to the product $(AB)C$, then to $AB$ itself, fully reverses the order of all three factors.`
      },
      {
        q: `An elementary matrix is formed by adding 4 times row 1 to row 2 of the identity matrix. What is its determinant?`,
        a: `1. Adding a multiple of one row to another does not change the determinant, and the identity matrix's determinant is 1, so this elementary matrix's determinant stays 1.`
      },
      {
        q: `Points (0,0), (2,4), and (1,2) are given. Are they collinear?`,
        a: `Yes. Since (1,2) is exactly halfway between (0,0) and (2,4) on the same line, the triangle they form has zero area, and the determinant test confirms collinearity.`
      },
      {
        q: `Before checking, guess: if you scale matrix A by 0, what matrix do you get?`,
        a: `You get the zero matrix, since every entry is multiplied by 0, turning every position into 0 regardless of the original value.`
      },
      {
        q: `The adjoint formula proves that a triangular matrix's inverse is also triangular. Why is this a useful fact beyond just computing one inverse?`,
        a: `It lets you predict the shape of an inverse in advance, without computing it, whenever you know the original matrix is triangular.`
      },
      {
        q: `Find $\\det(A)$ for the triangular matrix $A=\\begin{bmatrix}2&9&-3\\\\0&1&8\\\\0&0&-5\\end{bmatrix}$.`,
        a: `$\\det(A)=(2)(1)(-5)=-10$, the product of the diagonal entries.`
      },
      {
        q: `A 5x5 matrix has $\\det(A)=0$. Does the system $Ax=0$ have only the trivial solution $x=0$?`,
        a: `No. Because $\\det(A)=0$ means A is singular, and one of the equivalent facts about singular matrices is that $Ax=0$ has more solutions than just the trivial one.`
      },
      {
        q: `A system has $\\det(A)=0$. Can you still use Cramer's Rule to solve it?`,
        a: `No. Cramer's Rule requires dividing by $\\det(A)$, so it cannot be used whenever the determinant is zero.`
      },
      {
        q: `A matrix has column 3 equal to twice column 1. Without computing anything else, what is its determinant?`,
        a: `Zero, since proportional columns force the determinant to zero, the same way proportional rows do.`
      },
      {
        q: `A student claims that since $AB$ is defined, $BA$ must also be defined, just possibly a different matrix. Is this correct?`,
        a: `No. $AB$ being defined only requires A's columns to match B's rows; it says nothing about whether B's columns match A's rows, so $BA$ can be completely undefined.`
      },
      {
        q: `Matrix A is partitioned into four 2x2 blocks, $A_{11}, A_{12}, A_{21}, A_{22}$. What rule do you use to multiply A by a matching partitioned matrix B?`,
        a: `Multiply the blocks the same way you multiply ordinary matrix entries, using the row-times-column rule on the blocks themselves, as long as the block sizes are conformable (they line up).`
      },
      {
        q: `You compute a matrix product two ways: once using block multiplication on a partitioned 4x4 matrix, and once multiplying every entry directly. Should the two answers match?`,
        a: `Yes. Block multiplication always agrees with ordinary entry-by-entry multiplication, since it applies the same row-times-column rule at the level of blocks instead of single entries.`
      },
      {
        q: `Solve $AX=B$ for X, given $A^{-1}=\\begin{bmatrix}3&-5\\\\-1&2\\end{bmatrix}$ and $B=\\begin{bmatrix}1\\\\4\\end{bmatrix}$.`,
        a: `$X=A^{-1}B=\\begin{bmatrix}-17\\\\7\\end{bmatrix}$. Multiplying the inverse by B: $(3)(1)+(-5)(4)=-17$ and $(-1)(1)+(2)(4)=7$.`
      },
      {
        q: `Write the system $x+2y=5$, $3x-y=1$ in matrix form Ax=b.`,
        a: `$\\begin{bmatrix}1&2\\\\3&-1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}5\\\\1\\end{bmatrix}$. The coefficients form A, the unknowns form x, and the right sides form b.`
      },
      {
        q: `Three points give a determinant-based "area" of zero. What does this tell you about the points?`,
        a: `The three points are collinear, meaning they all lie on a single straight line, since a triangle with zero area has collapsed to a flat line.`
      },
      {
        q: `Multiply $\\begin{bmatrix}1&2\\\\3&0\\end{bmatrix}\\begin{bmatrix}2&1\\\\1&4\\end{bmatrix}$.`,
        a: `$\\begin{bmatrix}4&9\\\\6&3\\end{bmatrix}$. Row 1 times column 1: (1)(2)+(2)(1)=4. Row 1 times column 2: (1)(1)+(2)(4)=9. Row 2 times column 1: (3)(2)+(0)(1)=6. Row 2 times column 2: (3)(1)+(0)(4)=3.`
      },
      {
        q: `Find the eigenvalues of $A=\\begin{bmatrix}1&4\\\\2&3\\end{bmatrix}$.`,
        a: `$\\lambda=5$ or $\\lambda=-1$. Solving $\\det(\\lambda I-A)=(\\lambda-1)(\\lambda-3)-8=\\lambda^2-4\\lambda-5=0$ factors as $(\\lambda-5)(\\lambda+1)=0$.`
      },
      {
        q: `Why does a matrix entry need two subscripts (like $a_{23}$) instead of just one?`,
        a: `A matrix entry needs a row position and a column position to be located uniquely. One subscript is enough for a list (like a row matrix), but a full grid needs two coordinates, the same way a seat needs both a row and a seat number.`
      },
      {
        q: `Why is a matrix's inverse always unique, when one exists?`,
        a: `If two different matrices B and C both acted as inverses of A, then $B=BI=B(AC)=(BA)C=IC=C$, showing B and C must actually be the same matrix.`
      },
      {
        q: `Why does $\\det(AB)=\\det(A)\\det(B)$ hold, when $\\det(A+B)=\\det(A)+\\det(B)$ does not?`,
        a: `The product rule follows from factoring A into elementary matrices. Each of those matrices scales a determinant by its own known factor under multiplication. Addition mixes entries across both matrices at once, in a way that does not correspond to any single scaling factor.`
      },
      {
        q: `Why does matrix multiplication order matter, when ordinary number multiplication does not?`,
        a: `Multiplying A times B mixes rows of A with columns of B, while B times A mixes rows of B with columns of A, a completely different pairing, so there is no reason to expect the same result.`
      },
      {
        q: `Why does Cramer's Rule need one full determinant computed for every single unknown, while the inverse method computes the inverse just once?`,
        a: `Cramer's Rule builds a brand new matrix $A_j$ for every unknown, with a different column replaced. So it needs a new determinant each time. The inverse $A^{-1}$, by contrast, is reused unchanged for every unknown once computed.`
      },
      {
        q: `Why does matrix equality require BOTH matrices to have the same size first?`,
        a: `Without matching size, there is no way to pair up entries by position, since one matrix might have an entry where the other has none at all.`
      },
      {
        q: `Why is a triangular matrix's determinant just the product of its diagonal entries?`,
        a: `Repeated cofactor expansion along the row or column with all the zeros peels off one diagonal entry at a time, since every other term in each expansion is multiplied by zero.`
      },
      {
        q: `Why does an elementary matrix's own determinant exactly match the effect that row operation has on any determinant it's applied to?`,
        a: `Multiplying by an elementary matrix on the left performs that exact row operation. Determinants multiply under matrix products, so the elementary matrix's determinant directly scales the result.`
      },
      {
        q: `Why does $A\\cdot\\text{adj}(A)=\\det(A)\\cdot I$ hold, even for the off-diagonal entries of the product?`,
        a: `Each off-diagonal entry works out to a cofactor expansion of a matrix with a duplicated row. Such a matrix always has determinant zero. So those off-diagonal entries vanish, leaving only $\\det(A)$ on the diagonal.`
      },
      {
        q: `Why must you check both AB=I and BA=I when confirming B is the inverse of A?`,
        a: `Because matrix multiplication is not commutative, checking only one order does not guarantee the other order also gives the identity, so both must be verified.`
      },
      {
        q: `What geometric effect does the matrix $\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$ have when multiplied by a column vector?`,
        a: `It reflects the point across the x-axis, keeping the first coordinate the same and flipping the sign of the second coordinate.`
      },
      {
        q: `What single equation connects a matrix, its adjoint, and its determinant?`,
        a: `$A\\cdot\\text{adj}(A)=\\det(A)\\cdot I$.`
      },
      {
        q: `For a system of 6 equations in 6 unknowns, would Cramer's Rule or Gaussian elimination be more efficient?`,
        a: `Gaussian elimination. Cramer's Rule needs 7 separate 6x6 determinants, which becomes far slower than elimination once the system grows past about 3 variables.`
      },
      {
        q: `A student simplifies $AB=AC$ to conclude $B=C$. Is this always valid for matrices?`,
        a: `No. The cancellation law fails for matrices in general. AB can equal AC even when B and C are different matrices, unlike ordinary number algebra.`
      },
      {
        q: `What signals that a matrix has no inverse while you are running row reduction toward $[A|I]$?`,
        a: `If an entire row on the left side becomes all zeros at any point, the matrix has no inverse.`
      },
      {
        q: `A student computes $\\det(A)=2$ and $\\det(B)=3$, then concludes $\\det(A+B)=5$. Is this valid?`,
        a: `No. $\\det(A+B)$ does not generally equal $\\det(A)+\\det(B)$; this addition rule fails for determinants in general.`
      },
      {
        q: `A railway engineer surveys 3 points on a bridge arch to fit the parabola $y=ax^2+bx+c$. Why do exactly 3 points give enough information to solve for a, b, and c using Cramer's Rule?`,
        a: `Each point gives one linear equation in the 3 unknowns a, b, and c, so 3 points give exactly 3 equations, precisely enough to solve for 3 unknowns using Cramer's Rule.`
      },
      {
        q: `Compute the linear combination $A - 2B$ where $A=\\begin{bmatrix}5&1\\\\0&3\\end{bmatrix}$ and $B=\\begin{bmatrix}2&0\\\\1&1\\end{bmatrix}$.`,
        a: `$\\begin{bmatrix}1&1\\\\-2&1\\end{bmatrix}$. Scale B by 2 first, getting $\\begin{bmatrix}4&0\\\\2&2\\end{bmatrix}$, then subtract entry by entry from A.`
      },
      {
        q: `A restaurant order matrix has rows for customers and columns for burgers, sodas, and fries. To get each customer's total bill, what should you multiply the order matrix by?`,
        a: `A column matrix of unit prices, one price per item type. Multiplying the order matrix by this price column gives each customer's total cost as a matrix product.`
      },
      {
        q: `A 4x4 matrix has $\\det(A)$ where one row is a combination of two other rows. What can you conclude about its invertibility?`,
        a: `It is not invertible, since dependent rows force the determinant to zero, and determinant zero means the matrix is singular.`
      },
      {
        q: `You know $(A+B)+C = A+(B+C)$ holds for matrix addition. Does a similar associative law hold for matrix multiplication, $(AB)C = A(BC)$?`,
        a: `Yes, matrix multiplication is also associative, so you can group a chain of matrix products however is convenient without changing the answer.`
      },
      {
        q: `If $\\det(A^T)=6$, what is $\\det(A)$?`,
        a: `$\\det(A)=6$ too, since $\\det(A^T)=\\det(A)$ always.`
      },
      {
        q: `A grayscale image matrix has entries for pixel brightness. If you want to brighten the whole image uniformly, what matrix operation do you perform?`,
        a: `Scalar multiplication: multiply every entry of the image matrix by a constant greater than 1, which increases every pixel's brightness value uniformly.`
      },
      {
        q: `Why does the 2x2 inverse formula fail completely when $ad-bc=0$, rather than just giving a slightly wrong answer?`,
        a: `Because the formula divides by $ad-bc$, and dividing by zero is undefined, so the formula simply cannot produce any matrix at all in that case.`
      },
      {
        q: `Why does the entry in row 2, column 3 of AB use only row 2 of A and column 3 of B, and nothing else?`,
        a: `Because the row-times-column rule pairs one specific row of A with one specific column of B for each output position, ignoring every other row or column.`
      },
      {
        q: `When solving a matrix equation like $2X-A=B$ for X, why can you isolate X using the same steps as solving $2x-a=b$ for a number x?`,
        a: `Because matrix addition, subtraction, and scaling follow the same entrywise rules as ordinary numbers, so the algebra steps used to isolate a variable work identically.`
      },
      {
        q: `Why does deleting row 2 and column 1 give the correct minor for the entry in position (2,1)?`,
        a: `The minor for an entry is defined as the determinant left after removing that entry's own row and column, so the entry at (2,1) requires removing exactly row 2 and column 1.`
      },
      {
        q: `Why does spotting proportional rows let you skip cofactor expansion entirely when finding a determinant?`,
        a: `Because proportional rows guarantee the determinant is zero, so you already know the answer without doing any further computation.`
      },
      {
        q: `Why does $(AB)^T$ equal $B^TA^T$, with the order reversed, instead of $A^TB^T$?`,
        a: `Because AB mixes rows of A with columns of B; to reproduce that same mixing after flipping everything to rows and columns, the factor order has to reverse.`
      },
      {
        q: `Why does dividing $A\\cdot\\text{adj}(A)=\\det(A)\\cdot I$ by $\\det(A)$ give a formula for $A^{-1}$?`,
        a: `Dividing both sides by $\\det(A)$ turns the left side into A times $\\frac{1}{\\det(A)}\\text{adj}(A)$, and the right side into just I, which is exactly the defining property of an inverse.`
      },
      {
        q: `Why does a zero row appearing midway through row reduction mean the matrix could never reach the identity matrix?`,
        a: `Because a zero row can never be transformed into a row of the identity matrix using row operations; row operations cannot create nonzero entries out of an all-zero row.`
      },
      {
        q: `Why is the checkerboard sign pattern for cofactors useful to memorize?`,
        a: `It lets you assign the correct sign to any cofactor instantly, without recomputing $(-1)^{i+j}$ every time, since the signs simply alternate starting with + in the top-left corner.`
      },
      {
        q: `Two people expand the same determinant along different rows or columns. Should their answers agree?`,
        a: `Yes. Cofactor expansion always gives the same determinant no matter which row or column is chosen, as long as it is done correctly.`
      },
      {
        q: `Why does a zero row appearing during row reduction prove both that a matrix is singular AND that its determinant is zero, using one observation?`,
        a: `A zero row means the reduction can never reach the identity matrix, which proves the matrix is singular; that same zero row also forces any cofactor expansion along it to total zero, proving the determinant is zero too.`
      },
      {
        q: `When would you choose cofactor expansion over row reduction to find a determinant?`,
        a: `When the matrix is small (2x2 or 3x3) or has a row or column with mostly zeros, cofactor expansion is quicker by hand; row reduction wins for larger or denser matrices.`
      },
      {
        q: `For a 6x6 matrix, would you use the adjoint formula or row reduction to find the inverse?`,
        a: `Row reduction. The adjoint formula requires computing many cofactors and becomes impractically slow for matrices larger than 3x3; row reduction stays efficient.`
      },
      {
        q: `Why can you freely add or remove parentheses in a sum or product of matrices?`,
        a: `Because both matrix addition and matrix multiplication are associative, meaning the grouping of terms never changes the final result.`
      },
      {
        q: `A calculator gives a singular-matrix error for a matrix with a whole row of zeros. Why does this match the determinant test for invertibility?`,
        a: `A zero row forces the determinant to zero through cofactor expansion, and determinant zero is exactly the calculator's criterion for reporting a matrix as singular.`
      },
      {
        q: `Why is viewing AB "by columns" (each column of AB equals A times the matching column of B) a valid way to compute a matrix product?`,
        a: `The row-times-column rule computes each column of AB using only that one column of B. So multiplying A by a single column of B in isolation reproduces exactly that column of the full product.`
      },
      {
        q: `Why does zero area for a computed "triangle" of three points, using coordinates from a land survey, indicate a surveying or data-entry error rather than a valid triangular plot?`,
        a: `Because zero area means the three points are collinear, so they cannot form an actual triangular plot; a genuine triangular plot always has three points spreading in two directions with nonzero area.`
      },
      {
        q: `Why does a 3x2 matrix become a 2x3 matrix after transposing, rather than staying 3x2?`,
        a: `Transposing swaps every row into a column and every column into a row, so the original 3 rows become 3 columns, and the original 2 columns become 2 rows, giving a 2x3 result.`
      },
      {
        q: `You are told a spreadsheet has 8 rows of student scores and 3 columns of test names. If you represent this as a matrix, what size is it, and is it square?`,
        a: `The matrix is 8x3, and it is not square, since it does not have equal rows and columns (8 rows but only 3 columns).`
      },
      {
        q: `A calculator can invert, multiply, and find determinants of matrices directly. Why does this not remove the need to understand the underlying methods?`,
        a: `You still need to know when an inverse exists. You must set up a matrix equation correctly and read a singular-matrix error. All of these require understanding the concepts behind the calculator's shortcuts.`
      },
      {
        q: `A student mixes up rows and columns when writing a matrix's size. What single convention resolves the ambiguity every time?`,
        a: `Rows are always stated first, columns second, in "rows times columns" order, for both size and entry subscripts.`
      },
      {
        q: `Why does splitting only one row of a determinant into a sum keep the row-sum identity true, when splitting every row at once (as in $\\det(A+B)$) breaks it?`,
        a: `Splitting one row only changes one factor in the cofactor expansion along that row, cleanly separating into two determinants. Splitting every row at once mixes entries across rows and columns. That mixing does not correspond to any simple sum.`
      },
      {
        q: `A stochastic matrix has columns that each sum to 1. If you multiply it by a population column, why does the total population never change?`,
        a: `Because each column redistributes exactly 100% of one group, no more and no less, so multiplying by the population column only reshuffles people across categories, never losing or adding any.`
      },
      {
        q: `A sales-commission problem gives total sales and total commission for a few salespeople selling standard, deluxe, and super-deluxe phones. How can this be solved using matrix inversion?`,
        a: `Write the unknown per-tier commission rates as a column, the sales counts as the coefficient matrix, and the total commissions as the constant column, then solve using $x = A^{-1}b$ or Cramer's Rule.`
      },
      {
        q: `Guess: does a similar single "shortcut formula" like the 2x2 inverse formula exist for a 5x5 matrix?`,
        a: `No single shortcut formula exists at that size; larger matrices need row reduction (the augmented-identity method) to find an inverse.`
      },
      {
        q: `You already know the 2x2 determinant is $ad-bc$. Guess how many terms a full 3x3 determinant expansion involves.`,
        a: `Three terms, one for each entry in the row or column you expand along, each multiplied by its own cofactor (which is itself a smaller 2x2 determinant).`
      },
      {
        q: `Cofactor expansion on a 3x3 matrix takes a handful of steps. Guess whether that number of steps grows slowly or quickly as the matrix size increases to 10x10.`,
        a: `It grows extremely quickly, faster and faster, which is exactly why row reduction becomes necessary for larger matrices.`
      },
      {
        q: `You built a cofactor for every entry of a matrix. Guess what you get if you collect them into a matrix and then transpose it.`,
        a: `You get the adjoint of the matrix, which then connects back to the inverse through the formula $A^{-1}=\\frac{1}{\\det(A)}\\text{adj}(A)$.`
      },
      {
        q: `Before working it out, guess: does multiplying the coefficient matrix A by the unknown column x in Ax=b reproduce the original system of equations?`,
        a: `Yes, multiplying Ax out using the row-times-column rule reproduces the exact original equations, since that is exactly how the matrix form was built.`
      },
      {
        q: `A land survey's triangular plot uses the determinant area formula. Guess whether the formula still works if the three points are listed in a different order.`,
        a: `The magnitude of the area stays correct either way; only the sign of the determinant may flip, which is why the formula uses the absolute value.`
      },
      {
        q: `You can already solve $Ax=b$ using $A^{-1}$. Guess whether there's a way to get just one unknown, like $x_2$, without computing the whole inverse.`,
        a: `Yes, Cramer's Rule finds a single unknown directly using two determinants, without ever computing the full inverse matrix.`
      },
      {
        q: `The 2x2 shortcut formula uses $ad-bc$. Guess whether a similar single formula could realistically work for a 4x4 matrix by hand.`,
        a: `Not practically; row reduction is used instead for matrices larger than 2x2, since a single closed-form formula would require far too many terms.`
      },
      {
        q: `Most vectors change direction when multiplied by a matrix. Guess whether any special vectors exist that only get scaled, not redirected.`,
        a: `Yes, these are called eigenvectors; they get scaled by their matching eigenvalue but never change direction.`
      },
      {
        q: `Why does the matrix $\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$ leave the first coordinate of any point unchanged?`,
        a: `Because row 1 of the matrix is (1,0), so multiplying it by a point only keeps the first coordinate and adds zero times the second coordinate, leaving the first coordinate untouched.`
      },
      {
        q: `Why does the distributive law $A(B+C)=AB+AC$ hold for matrices when the cancellation law does not?`,
        a: `Distributivity follows directly from how each entry of the product is defined as a sum, and that sum splits apart cleanly. Cancellation would require dividing by a matrix, which is not always possible since not every matrix has an inverse.`
      },
      {
        q: `Why does the characteristic equation come from setting a determinant to zero, rather than solving $Ax=\\lambda x$ for x directly?`,
        a: `Because rewriting the equation as $(\\lambda I-A)x=0$ shows a nonzero solution x exists only when the coefficient matrix $\\lambda I-A$ is singular. Singularity is tested by a determinant equal to zero.`
      },
      {
        q: `Why must $\\lambda I - A$ be singular for a nonzero eigenvector to exist?`,
        a: `An invertible matrix only ever sends the zero vector to zero; a singular matrix is the only kind that can send some nonzero vector to zero, which is exactly what $(\\lambda I-A)x=0$ requires.`
      },
      {
        q: `When two matrices are declared equal, why does this turn into several separate ordinary equations instead of one?`,
        a: `Because each entry position gives its own independent equation once you require matching entries, and a matrix generally has more than one entry.`
      },
      {
        q: `Why does replacing an entire column of A with b, rather than a single entry, correctly isolate one unknown in Cramer's Rule?`,
        a: `Because that column holds the coefficients of one unknown across all the equations. So replacing it with the constants column captures how that one unknown relates to the whole system.`
      },
      {
        q: `Why does multiplying both sides of $AX=B$ by $A^{-1}$ on the left isolate X?`,
        a: `Because $A^{-1}A=I$, and multiplying by the identity leaves X unchanged, so the A on the left cancels out, leaving $X=A^{-1}B$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Matrices and Determinants',
      sections: [
        <>
          <div className="ref-header">
            <span className="ref-label">Matrix Basics</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix entry notation</span>
            <div className="ref-formula-eq">{`$$A = [a_{ij}]$$`}</div>
            <p className="ref-formula-desc">{`When to use: naming or locating a single value inside a matrix by its row and column position.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix equality</span>
            <div className="ref-formula-eq">{`$$\\text{Same size, and } a_{ij} = b_{ij} \\text{ for every } i,j$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving for unknown entries when two matrices are given as equal.`}</p>
          </div>

          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">Entry</span>
              <p>{`A single number inside a matrix.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Size</span>
              <p>{`Rows times columns, e.g. $2\\times3$.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Row matrix</span>
              <p>{`A matrix with only one row.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Column matrix</span>
              <p>{`A matrix with only one column.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Square matrix</span>
              <p>{`A matrix with equal rows and columns.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Main diagonal</span>
              <p>{`Entries running top-left to bottom-right in a square matrix.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Matrix Arithmetic</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix addition</span>
            <div className="ref-formula-eq">{`$$(A+B)_{ij} = a_{ij}+b_{ij}$$`}</div>
            <p className="ref-formula-desc">{`When to use: combining two matrices of the same size entry by entry.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix subtraction</span>
            <div className="ref-formula-eq">{`$$(A-B)_{ij} = a_{ij}-b_{ij}$$`}</div>
            <p className="ref-formula-desc">{`When to use: comparing or subtracting two matrices of the same size entry by entry.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Scalar multiplication</span>
            <div className="ref-formula-eq">{`$$(cA)_{ij} = c \\cdot a_{ij}$$`}</div>
            <p className="ref-formula-desc">{`When to use: scaling every entry of a matrix by the same constant.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix multiplication size rule</span>
            <div className="ref-formula-eq">{`$$(m\\times r)(r\\times n) = m\\times n$$`}</div>
            <p className="ref-formula-desc">{`When to use: checking whether a product $AB$ is defined before multiplying.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix multiplication entry rule</span>
            <div className="ref-formula-eq">{`$$(AB)_{ij} = a_{i1}b_{1j}+a_{i2}b_{2j}+\\dots+a_{ir}b_{rj}$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing a single entry of a matrix product by hand.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix form of a linear system</span>
            <div className="ref-formula-eq">{`$$Ax = b$$`}</div>
            <p className="ref-formula-desc">{`When to use: rewriting a system of linear equations to solve with matrix tools like an inverse or Cramer's Rule.`}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Law</th>
                <th>Holds for matrices?</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$A+B = B+A$`}</td>
                <td>{`Yes`}</td>
                <td>{`addition is commutative`}</td>
              </tr>
              <tr>
                <td>{`$(A+B)+C = A+(B+C)$`}</td>
                <td>{`Yes`}</td>
                <td>{`addition is associative`}</td>
              </tr>
              <tr>
                <td>{`$A(B+C) = AB+AC$`}</td>
                <td>{`Yes`}</td>
                <td>{`left distributive law`}</td>
              </tr>
              <tr>
                <td>{`$(AB)C = A(BC)$`}</td>
                <td>{`Yes`}</td>
                <td>{`multiplication is associative`}</td>
              </tr>
              <tr>
                <td>{`$AB = BA$`}</td>
                <td>{`No`}</td>
                <td>{`multiplication is not commutative in general`}</td>
              </tr>
              <tr>
                <td>{`$AB=AC \\Rightarrow B=C$`}</td>
                <td>{`No`}</td>
                <td>{`cancellation law fails`}</td>
              </tr>
              <tr>
                <td>{`$AB=0 \\Rightarrow A=0 \\text{ or } B=0$`}</td>
                <td>{`No`}</td>
                <td>{`a nonzero product can equal the zero matrix`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Partitioned Matrices</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Block matrix multiplication</span>
            <div className="ref-formula-eq">{`$$\\begin{bmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{bmatrix}\\begin{bmatrix} B_{11} & B_{12} \\\\ B_{21} & B_{22} \\end{bmatrix} = \\begin{bmatrix} A_{11}B_{11}+A_{12}B_{21} & A_{11}B_{12}+A_{12}B_{22} \\\\ A_{21}B_{11}+A_{22}B_{21} & A_{21}B_{12}+A_{22}B_{22} \\end{bmatrix}$$`}</div>
            <p className="ref-formula-desc">{`When to use: multiplying large matrices by treating conformable blocks (blocks whose sizes line up) like single entries.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Special Matrices and the Transpose</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Identity matrix property</span>
            <div className="ref-formula-eq">{`$$AI = A, \\quad IA = A$$`}</div>
            <p className="ref-formula-desc">{`When to use: recognizing the matrix that leaves any compatible matrix unchanged under multiplication.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Zero column or row test</span>
            <div className="ref-formula-eq">{`$$\\text{A matrix with a zero row or column has no inverse}$$`}</div>
            <p className="ref-formula-desc">{`When to use: quickly ruling out invertibility without computing a determinant.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Transpose of a sum</span>
            <div className="ref-formula-eq">{`$$(A+B)^T = A^T+B^T$$`}</div>
            <p className="ref-formula-desc">{`When to use: distributing a transpose across an addition.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Transpose of a product</span>
            <div className="ref-formula-eq">{`$$(AB)^T = B^TA^T$$`}</div>
            <p className="ref-formula-desc">{`When to use: distributing a transpose across a product; note the factor order reverses.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Symmetric matrix definition</span>
            <div className="ref-formula-eq">{`$$A^T = A$$`}</div>
            <p className="ref-formula-desc">{`When to use: checking whether a square matrix is its own mirror image across the main diagonal.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Skew-symmetric matrix definition</span>
            <div className="ref-formula-eq">{`$$A^T = -A$$`}</div>
            <p className="ref-formula-desc">{`When to use: checking whether a square matrix is the negative of its own mirror image.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Trace</span>
            <div className="ref-formula-eq">{`$$\\text{Sum of the main-diagonal entries of a square matrix}$$`}</div>
            <p className="ref-formula-desc">{`When to use: you need a single summary number from a square matrix's diagonal.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Inverses</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Inverse definition</span>
            <div className="ref-formula-eq">{`$$AA^{-1}=I \\text{ and } A^{-1}A=I$$`}</div>
            <p className="ref-formula-desc">{`When to use: confirming a candidate matrix truly is the inverse of $A$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">2x2 inverse formula</span>
            <div className="ref-formula-eq">{`$$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the inverse of a $2\\times2$ matrix directly, valid only when $ad-bc \\neq 0$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Inverse of a product</span>
            <div className="ref-formula-eq">{`$$(AB)^{-1} = B^{-1}A^{-1}$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the inverse of a product of two invertible matrices; note the factor order reverses.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Inverse of a transpose</span>
            <div className="ref-formula-eq">{`$$(A^T)^{-1} = (A^{-1})^T$$`}</div>
            <p className="ref-formula-desc">{`When to use: relating the inverse and transpose of the same matrix.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Inverse of a scalar multiple</span>
            <div className="ref-formula-eq">{`$$(kA)^{-1} = \\frac{1}{k}A^{-1}$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the inverse of a scaled matrix without recomputing from scratch.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix powers</span>
            <div className="ref-formula-eq">{`$$A^rA^s = A^{r+s}, \\quad (A^r)^s = A^{rs}$$`}</div>
            <p className="ref-formula-desc">{`When to use: simplifying repeated matrix multiplication or negative integer powers of an invertible matrix.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Adjoint-based inverse</span>
            <div className="ref-formula-eq">{`$$A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A)$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing an inverse directly from cofactors, mainly for $2\\times2$ or $3\\times3$ matrices or theoretical derivations.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Adjoint identity</span>
            <div className="ref-formula-eq">{`$$A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$$`}</div>
            <p className="ref-formula-desc">{`When to use: the identity the adjoint-inverse formula is derived from.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Matrix equation solution</span>
            <div className="ref-formula-eq">{`$$AX = B \\Rightarrow X = A^{-1}B$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving for an unknown matrix once the coefficient matrix's inverse is known.`}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Invertibility check</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\det(A) \\neq 0$`}</td>
                <td>{`$A$ is invertible`}</td>
              </tr>
              <tr>
                <td>{`$\\det(A) = 0$`}</td>
                <td>{`$A$ is singular (no inverse)`}</td>
              </tr>
              <tr>
                <td>{`Zero row or zero column present`}</td>
                <td>{`$A$ is singular (no inverse)`}</td>
              </tr>
              <tr>
                <td>{`Row reduction reaches the identity matrix`}</td>
                <td>{`$A$ is invertible`}</td>
              </tr>
              <tr>
                <td>{`Row reduction produces a zero row`}</td>
                <td>{`$A$ is singular (no inverse)`}</td>
              </tr>
              <tr>
                <td>{`Two rows (or columns) are proportional`}</td>
                <td>{`$A$ is singular (no inverse)`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Cofactors, Minors, and Determinants</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cofactor definition</span>
            <div className="ref-formula-eq">{`$$C_{ij} = (-1)^{i+j}M_{ij}$$`}</div>
            <p className="ref-formula-desc">{`When to use: converting a minor into a signed cofactor before a cofactor expansion.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Checkerboard sign pattern</span>
            <div className="ref-formula-eq">{`$$+,-,+,-,\\dots \\text{ starting with } + \\text{ at position (1,1)}$$`}</div>
            <p className="ref-formula-desc">{`When to use: quickly assigning the correct sign to any cofactor without recomputing $(-1)^{i+j}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Determinant of a 2x2 matrix</span>
            <div className="ref-formula-eq">{`$$\\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad-bc$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing the determinant of any $2\\times2$ matrix directly.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">
              Determinant of a 3x3 matrix (cofactor expansion)
            </span>
            <div className="ref-formula-eq">{`$$\\det(A) = a_{11}M_{11} + a_{12}(-M_{12}) + a_{13}M_{13}$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing the determinant of a $3\\times3$ matrix by expanding along the first row.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">General n x n cofactor expansion</span>
            <div className="ref-formula-eq">{`$$\\det(A) = a_{i1}C_{i1}+a_{i2}C_{i2}+\\dots+a_{in}C_{in}, \\text{ any row } i \\text{ (or column)}$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing a determinant of any size, choosing the row or column with the most zeros to reduce work.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Determinant of a triangular matrix</span>
            <div className="ref-formula-eq">{`$$\\det(A) = \\text{product of the main-diagonal entries}$$`}</div>
            <p className="ref-formula-desc">{`When to use: a fast shortcut whenever the matrix is upper or lower triangular.`}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Row/column operation</th>
                <th>Effect on determinant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Multiply a row (or column) by nonzero constant $k$`}</td>
                <td>{`determinant is multiplied by $k$`}</td>
              </tr>
              <tr>
                <td>{`Swap two rows (or columns)`}</td>
                <td>{`determinant changes sign`}</td>
              </tr>
              <tr>
                <td>{`Add a multiple of one row (column) to another`}</td>
                <td>{`determinant is unchanged`}</td>
              </tr>
              <tr>
                <td>{`Row has all zeros`}</td>
                <td>{`determinant is 0`}</td>
              </tr>
              <tr>
                <td>{`Two rows (or columns) are proportional`}</td>
                <td>{`determinant is 0`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Determinant Properties</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Scalar</span>
            <div className="ref-formula-eq">{`$$\\det(kA) = k^n\\det(A) \\text{ for } n\\times n \\ A$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the determinant of a uniformly scaled matrix without recomputing.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Transpose</span>
            <div className="ref-formula-eq">{`$$\\det(A^T) = \\det(A)$$`}</div>
            <p className="ref-formula-desc">{`When to use: justifying that column operations affect a determinant the same way row operations do.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Product</span>
            <div className="ref-formula-eq">{`$$\\det(AB) = \\det(A)\\det(B)$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the determinant of a product without multiplying the matrices first.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Inverse</span>
            <div className="ref-formula-eq">{`$$\\det(A^{-1}) = \\frac{1}{\\det(A)}$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the determinant of an inverse from the determinant of the original matrix.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Row-sum determinant identity</span>
            <div className="ref-formula-eq">{`$$\\text{if row } i \\text{ of } A \\text{ is } u+v, \\ \\det(A) = \\det(A_u) + \\det(A_v)$$`}</div>
            <p className="ref-formula-desc">{`When to use: splitting a determinant when exactly one row is itself a sum of two rows (same row replaced by $u$, then by $v$).`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Determinant addition warning</span>
            <div className="ref-formula-eq">{`$$\\det(A+B) \\neq \\det(A)+\\det(B) \\text{ in general}$$`}</div>
            <p className="ref-formula-desc">{`When to use: never assume this shortcut; it fails except in special cases.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Cramer's Rule</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cramer's Rule (general)</span>
            <div className="ref-formula-eq">{`$$x_j = \\dfrac{\\det(A_j)}{\\det(A)}, \\text{ where } A_j \\text{ replaces column } j \\text{ of } A \\text{ with } b$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving $Ax=b$ for one or more unknowns directly, when $\\det(A) \\neq 0$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cramer's Rule (2 variables)</span>
            <div className="ref-formula-eq">{`$$x = \\dfrac{|D_x|}{|D|}, \\quad y = \\dfrac{|D_y|}{|D|}$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving a 2-variable linear system directly from its coefficient and constant columns.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cramer's Rule (n variables)</span>
            <div className="ref-formula-eq">{`$$x_i = \\dfrac{|D_{x_i}|}{|D|}$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving an $n$-variable linear system directly, one unknown at a time.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Determinants, Geometry, and Eigenvalues</span>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Area of a triangle via determinant</span>
            <div className="ref-formula-eq">{`$$\\mathcal{A} = \\pm\\frac{1}{2}\\begin{vmatrix} a_1 & b_1 & 1 \\\\ a_2 & b_2 & 1 \\\\ a_3 & b_3 & 1 \\end{vmatrix}$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding a triangle's area directly from its three vertex coordinates.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Collinearity test</span>
            <div className="ref-formula-eq">{`$$\\text{Area determinant} = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: checking whether three points lie on a single straight line.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Line through two points as a determinant</span>
            <div className="ref-formula-eq">{`$$\\begin{vmatrix} x & y & 1 \\\\ a_1 & b_1 & 1 \\\\ a_2 & b_2 & 1 \\end{vmatrix} = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: writing the equation of a line through two known points using a determinant.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Characteristic equation</span>
            <div className="ref-formula-eq">{`$$\\det(\\lambda I - A) = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the eigenvalues of a square matrix $A$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Eigenvector equation</span>
            <div className="ref-formula-eq">{`$$(\\lambda I - A)x = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the eigenvector matching a known eigenvalue $\\lambda$.`}</p>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function MatricesAndDeterminants() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
