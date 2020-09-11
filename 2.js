const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName (keyword, limit, callback) {
    const data = callback(keyword)

    const hasil = data.filter((item,index) => index < limit )

    return hasil
}

function search(keyword) {
    const data = name.filter(item => {
        const word = item.toLowerCase().search(keyword.toLowerCase())
        return word >= 0
    })
    return data
}

console.log(searchName("an", 3, search))
