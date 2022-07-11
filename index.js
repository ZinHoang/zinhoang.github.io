/* Use forEach to return every second item in the array */
const array = ['test', 'whatever', 'really', 'whynot']

function everySecondItem(arr) {
  let result = []
  arr.forEach((item, i) => {
    if (i % 2 !== 0) {
      result.push(item)
    }
  })
  return result
}
console.log(everySecondItem(array))
