function tombolKonversi() {
    let celciusInput = document.getElementById('celcius');
    let farenheitInput = document.getElementById('farenheit');
    let kalkulasiTextarea = document.getElementById('kalkulasi');
  
    let celciusValue = parseFloat(celciusInput.value);
    let farenheitValue = parseFloat(celciusValue * 1.8) + 32;
  
    farenheitInput.value = farenheitValue;
  
    let kalkulasiText = `(${celciusValue}\u00B0C + 32) x 9/5`;
    kalkulasiTextarea.value = kalkulasiText;
  }

function tombolReset() {
    let celciusInput = document.getElementById('celcius');
    let farenheitInput = document.getElementById('farenheit');
    let kalkulasiTextarea = document.getElementById('kalkulasi');

    celciusInput.value = "";
    farenheitInput.value = "";
    kalkulasiTextarea.value = "";
}

function tombolReverse() {
    let farenheitInput = document.getElementById('farenheit');
    let celciusInput = document.getElementById('celcius');
    let kalkulasiTextarea = document.getElementById('kalkulasi');
    
    let farenheitValue = parseFloat(farenheitInput.value);
    let celciusValue = (farenheitValue - 32) * 5/9;
    
    celciusInput.value = celciusValue.toFixed(2);
    
    let kalkulasiText = `(${farenheitValue}\u00B0F - 32) x 5/9`;
    kalkulasiTextarea.value = kalkulasiText;
}
