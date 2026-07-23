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

export function isPrime(n) {
  if (n < 2) return false
  if (n < 4) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

// Array form: 12 → [2, 2, 3]
export function primeFactors(n) {
  const out = []
  let m = Math.abs(n | 0)
  let d = 2
  while (d * d <= m) {
    while (m % d === 0) {
      out.push(d)
      m /= d
    }
    d++
  }
  if (m > 1) out.push(m)
  return out
}

// Object form: 12 → {2: 2, 3: 1}
export function factor(n) {
  let m = Math.abs(n | 0)
  const out = {}
  for (let p = 2; p * p <= m; p++) {
    while (m % p === 0) {
      out[p] = (out[p] || 0) + 1
      m = m / p
    }
  }
  if (m > 1) out[m] = (out[m] || 0) + 1
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
