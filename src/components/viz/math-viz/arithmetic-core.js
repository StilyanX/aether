// Pure number-theoretic helpers. No React dependency.

export function gcd(a, b) {
  a = Math.abs(a | 0)
  b = Math.abs(b | 0)
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return a
}

export function lcm(a, b) {
  return a && b ? Math.abs(a * b) / gcd(a, b) : 0
}

export function extGcd(a, b) {
  if (b === 0) return [a, 1, 0]
  const [g, s1, t1] = extGcd(b, a % b)
  return [g, t1, s1 - Math.floor(a / b) * t1]
}

export function euclideanSteps(a, b) {
  const out = []
  a = Math.abs(a | 0)
  b = Math.abs(b | 0)
  while (b !== 0) {
    const q = Math.floor(a / b)
    const r = a - q * b
    out.push({ a, b, q, r })
    a = b
    b = r
  }
  return out
}

export function isPrime(n) {
  n = n | 0
  if (n < 2) return false
  if (n < 4) return true
  if (n % 2 === 0) return false
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false
  return true
}

export function sieve(N) {
  const p = new Array(N + 1).fill(true)
  p[0] = p[1] = false
  for (let i = 2; i * i <= N; i++) if (p[i]) for (let j = i * i; j <= N; j += i) p[j] = false
  return p
}

export function sieveSteps(N) {
  const p = new Array(N + 1).fill(true)
  p[0] = p[1] = false
  const states = []
  states.push({ p: p.slice(), pivot: null })
  for (let i = 2; i <= N; i++) {
    if (!p[i]) continue
    for (let j = i * i; j <= N; j += i) p[j] = false
    states.push({ p: p.slice(), pivot: i })
    if (i * i > N) break
  }
  return states
}

export function factor(n) {
  n = Math.abs(n | 0)
  const out = {}
  for (let p = 2; p * p <= n; p++) {
    while (n % p === 0) {
      out[p] = (out[p] || 0) + 1
      n = n / p
    }
  }
  if (n > 1) out[n] = (out[n] || 0) + 1
  return out
}

export function factorList(n) {
  const f = factor(n)
  const out = []
  Object.keys(f)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach(p => {
      for (let i = 0; i < f[p]; i++) out.push(p)
    })
  return out
}

export function reduce(n, d) {
  if (d < 0) {
    n = -n
    d = -d
  }
  const g = gcd(n, d) || 1
  return [n / g, d / g]
}

export function fracAdd([a, b], [c, d]) {
  return reduce(a * d + c * b, b * d)
}
export function fracSub([a, b], [c, d]) {
  return reduce(a * d - c * b, b * d)
}
export function fracMul([a, b], [c, d]) {
  return reduce(a * c, b * d)
}
export function fracDiv([a, b], [c, d]) {
  return reduce(a * d, b * c)
}
export function fracCmp([a, b], [c, d]) {
  return a * d - c * b
}

export function longDivide(p, q, maxSteps = 32) {
  if (q === 0) return null
  const intPart = Math.floor(p / q)
  let r = p - intPart * q
  const seenAt = new Map()
  const digits = []
  const steps = []
  let k = 0
  while (r !== 0 && k < maxSteps && !seenAt.has(r)) {
    seenAt.set(r, k)
    const rr = r * 10
    const digit = Math.floor(rr / q)
    const nr = rr - digit * q
    steps.push({ remainder: r, digit, newRemainder: nr })
    digits.push(digit)
    r = nr
    k++
  }
  let prefix = digits,
    repeat = []
  if (r !== 0 && seenAt.has(r)) {
    const cycleStart = seenAt.get(r)
    prefix = digits.slice(0, cycleStart)
    repeat = digits.slice(cycleStart)
  }
  return { intPart, prefix, repeat, steps }
}

export function order10(q) {
  if (gcd(10, q) !== 1) return null
  let r = 1,
    k = 0
  do {
    r = (r * 10) % q
    k++
  } while (r !== 1 && k < q + 1)
  return k
}

export function stripTwosFives(q) {
  while (q % 2 === 0) q /= 2
  while (q % 5 === 0) q /= 5
  return q
}

export function pythagoreanTriple(m, n) {
  if (m <= n || n <= 0) return null
  const a = m * m - n * n,
    b = 2 * m * n,
    c = m * m + n * n
  const primitive = gcd(m, n) === 1 && (m + n) % 2 === 1
  return { a, b, c, primitive }
}

export function toBase(n, b) {
  n = Math.abs(n | 0)
  const steps = [],
    rems = []
  if (n === 0) return { digits: [0], steps: [{ n: 0, b, q: 0, r: 0 }] }
  while (n > 0) {
    const q = Math.floor(n / b),
      r = n - q * b
    steps.push({ n, b, q, r })
    rems.push(r)
    n = q
  }
  return { digits: rems.reverse(), steps }
}

export const baseDigit = d => (d < 10 ? String(d) : String.fromCharCode(55 + d))
