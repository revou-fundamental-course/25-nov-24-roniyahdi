function validateForm() {
    let inputTinggi = document.getElementById("tinggi-badan-input");
    let inputBerat = document.getElementById("berat-badan-input");
    let inputUsia =  document.getElementById("usia-input");
    let ket = document.getElementById("keterangan");
    let hasilBmi = document.getElementById("result-calculation");
    let infoResult = document.getElementById("info-result");

    let tinggi = parseFloat(inputTinggi.value);
    let berat = parseFloat(inputBerat.value);
    let usia = parseFloat(inputUsia.value);
  
    if (isNaN(tinggi) || isNaN(berat) || isNaN(usia)) {
      alert('Data yang anda masukkan ada yang keliru!');
      return;
    }
  
    let bmi = berat / ((tinggi / 100) ** 2);
    let kategori = "";
  
    if (bmi < 18.5) {
        ktrgan = "Kurang Berat Badan";
        kategori = "Berat badan anda kurang.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        ktrgan = "Berat Badan Ideal";
        kategori = "Anda memiliki berat badan normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        ktrgan = "Berat Badan Lebih";
        kategori = "Anda memiliki berat badan berlebih.";
    } else {
        ktrgan = "Obesitas";
        kategori = "Anda mengalami obesitas";
    }
  
    ket.innerHTML = ktrgan;
    hasilBmi.innerHTML = bmi.toFixed(2);
    infoResult.innerHTML = kategori;

  }