const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal"
    }

    if (Array.isArray(dataArray)) {
        if(dataArray.length <= 5) {
            return "Jumlah angka dalam dataArray harus lebih dari 5"
        } 
    } else {
        return "Data harus Array"
    }

    const hasil = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir)

    return hasil.sort((a, b) => a - b)
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
