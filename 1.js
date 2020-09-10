let word = "Saya belajar React dan Redux"
let arr = ["Node JS", "React", "React Native"]
let num = [ 23, 4, 50, 21, 12, 5]

// split()
console.log(word.split(" "))

// join()
console.log(arr.join(" "))

//concat()
let arr1 = [1, 2]
let arr2 = [3, 4]
console.log(arr1.concat(arr2))

// pop()
arr.pop()
console.log(arr)

// shift
arr.shift("Docker")

// unshift
arr.unshift()

// every()
console.log(num.every(item => item > 0))

// search()
console.log(word.search("Java"))

// toLowerCase()
console.log(word.toLowerCase())

// length()
console.log(num.length)