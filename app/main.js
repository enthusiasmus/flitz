console.log('Hallo Webpack')

var evens = [2, 3, 4, 6]
var odds = evens.map(v => v + 1)

console.log(odds)

''.padEnd(10)

async function x () {
  return await 5 * 5
}

// using `.then`
x().then(value => console.log(value))

// inside another async function
async function main () {
  let value = await x()
  console.log(value)
}

main()
