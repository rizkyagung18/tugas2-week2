const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName (keyword, limit, callback) {
    data = callback(keyword)

    let hasil = data.map((item,index) => {
        if(index < limit) {
            return item
        }
    })

    return hasil.filter(item => item !== undefined)
}

function search(keyword) {
    let data = name.filter(item => {
        let word = item.toLowerCase().search(keyword.toLowerCase())
        if(word >= 0) {
            return item
        }
    })
    return data
}

console.log(searchName("an", 3, search))
