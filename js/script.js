// ini file javascript
// function peringatan(){
    // let namaDepan = document.getElementById("nama-depan").value
    // let namaBelakang = document.getElementById("nama-belakang").value
    // console.log(namaDepan + " " + namaBelakang);
    // bisa juga pakai console.log(`${namaDepan} ${namaBelakang}`)
    // let hasil = parseInt(namaDepan) + parseInt(namaBelakang);
    // console.log(hasil);
    // document.write('Hasilnya adalah ' + hasil)
// }


// ini kalkulator
// var calcDisplay = "";

// function btnClick(e) {
    // if (e == "1" || e == "2" || e == "3" || e == "4" ||
        // e == "5" || e == "6" || e == "7" || e == "8" ||
        // e == "9" || e == "/" || e == "*") {
    // if (e == "AC") {
        // calcDisplay = ""
    // } else {
    // calcDisplay = calcDisplay + e;
    // console.log(calcDisplay);
    // }
    // document.getElementById("display").value = calcDisplay;
// } else {
    // console.log("Input harus berupa angka dan simbol");
// }
// }
// 
// var displayValue = document.getElementById("display").value;
// console.log(displayValue);
// document.getElementById("display").addEventListener('input', function
// displayChange() {
    // console.log(this.value)
    // let e = this.value
    // let chars = /^[0-9]+$/
// 
    // if (chars.test(e)) {
        // console.log("digits")
        // } else {
            // console.log("not digits");
        // }
// })
// 
function validateForm() {
    let inputBeratBadan = document.getElementById('berat-badan-input').value;
    let inputUsia = document.getElementById('usia-input').value;
    let inputTinggiBadan = document.getElementById('tinggi-badan-input').value;
    
    console.log('BB : ' + inputBeratBadan);
    console.log('Usia : ' + inputUsia);
    console.log('Tinggi : ' + inputTinggiBadan);

    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != ''){
        let calculate = parseInt(inputBeratBadan) + parseInt(inputTinggiBadan);
        updateResult(calculate);
    } else {
        alert('Inputan Anda Kosong! Mohon Cek Kembali');
    }
}

function updateResult(value) {
    document.getElementById('result-calculation').innerHTML = value;
}