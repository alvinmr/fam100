const fs = require("fs");

fs.readFile('fam.json', 'utf8', (err, data) => {
    const fam = JSON.parse(data)
    let isianGroup = "group0"
    let jawaban = "jawaban1"
    
    if(fam.some(e => e.group === isianGroup)){
        console.log(`ada nih ${isianGroup}`);
        let index = fam.findIndex(fam => fam.group === isianGroup)
        if(fam[index].jawaban.includes(jawaban)){    
            fam[index].jawabanBener.push(jawaban)
            console.log(`jawabanmu bener jawaban : "${jawaban}" di ${isianGroup}`);
            if(fam[index].jawabanBener.length === fam[index].jawaban.length){
                console.log("ketebak semua, selamat! permainan selesai");
            }
        }else{
            console.log(`jawaban salah, gada jawaban : "${jawaban}" di ${isianGroup}`);
        }
    }else{
        console.log(`gada ${isianGroup}`);
        fam.push({
            "group" : isianGroup,
            "soal": "ini soal3",
            "jawaban": ["jawaban1", "jawaban2","jawaban3"],
            "userId": [],
            "jawabanBener": [] 
        })
        var data = JSON.stringify(fam)
        fs.writeFile('fam.json', data, 'utf8', (err) => {
            if (err) throw err
            console.log("berhasil ditambahkan");
        })

    }
    // console.log(fam);
});
// console.log(fam);
// fam.forEach((fam, index, arr) => {
//     let array = arr[index]
//     if (array.group.includes("group3")) {
//         if (array.jawaban.includes("jawaban1")) {
//             console.log("jawaban bener");
//         }
//     }
//     else console.log("bukan grup ini");
// })
// fam.forEach((fam, index, arr) => {
//     let array = arr[index]
//     if (array.group.includes("group2")) {        
//         // arr.splice(index, 1)
//         array.jawabanBener.push("jawaban2")
//     }
//     else {
//         console.log("yuk pencet start duluw");
//     }
// })
// console.log(fam);

