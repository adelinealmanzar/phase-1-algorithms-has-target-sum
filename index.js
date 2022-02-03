function hasTargetSum(array, target) {
  const array1 = []
  const array2 = []

  array.forEach(el => {
    array1.push(el)
    array1.forEach(el1 => {
      if (el1 !== el) {
        array2.push(el + el1)
      }
    })
  })
  const shouldMatchTargetArr = array2.filter(el2 => el2 === target)
  const targetArr = [target]
  return targetArr[0] === shouldMatchTargetArr[0]
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
console.log(hasTargetSum([22, 19, 4, 6, 30], 25))