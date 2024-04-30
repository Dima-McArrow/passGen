const a = "skdglksdahgklasdjfgkasdjgiowerhtihweigslkhas".split('')

console.log(a)

console.log(a.length)

let b = a.slice(0, a.length)

console.log(b)

let c = ""
for (let i = 0; i < b.length; i++) {
  c += b[i]
}

console.log(c)