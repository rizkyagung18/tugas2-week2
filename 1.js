let word = "Saya belajar React dan Redux"
let arr = ["Node JS", "React", "React Native"]
let num = [ 23, 4, 50, 21, 12, 5]

// split()
console.log(word.split(" "))
// Berfungsi untuk mengubah string menjadi array

// join()
console.log(arr.join(" "))
// Berfungsi untuk mengubah array menjadi string

//concat()
let arr1 = [1, 2]
let arr2 = [3, 4]
console.log(arr1.concat(arr2))
// Berfungsi untuk menggabungkan 2 array

// pop()
arr.pop()
console.log(arr)
// Berfungsi untuk menghapus elemen terakhir pada array

// shift
arr.shift()
console.log(arr)
// Berfungsi untuk menghapus elemen awal pada array

// unshift
arr.unshift("Docker")
console.log(arr)
// Berfungsi untuk menambahkan elemen awal pada array

// every()
console.log(num.every(item => item > 0))
// Berfungsi untuk mengecek apakah nilai di dalam array sesuai dengan callback di parameter

// search()
console.log(word.search("Java"))
// Berfungsi untuk mencari kata kunci pada string

// toLowerCase()
console.log(word.toLowerCase())
// Berfungsi untuk mengubah huruf pada string menjadi kecil semua

// length()
console.log(num.length)
// Berfungsi untuk menghitung panjang dari suatu array
