function rastgeleSayilar() {
  let sayi = document.getElementById("sayi").value;
  let n = Number(sayi);

  // Rastgele sayılar üretiyoruz.
  let rastgeleSayilar = [];
  for (let i = 0; i < n; i++) {
    rastgeleSayilar.push(Math.floor(Math.random() * 100) + 1);
  }

  // Rastgele sayıları ekrana yazdırıyoruz.
  let sayiListesi = document.getElementById("sayılar");
  sayiListesi.innerHTML = "";
  for (let sayi of rastgeleSayilar) {
    sayiListesi.innerHTML += `<li>${sayi}</li>`;
  }
}

function buyuktenKucugeSirala() {
  let Sayilar = document.getElementById("sayılar").getElementsByTagName("li");
  let rastgeleSayilar = Array.from(Sayilar, (sayi) =>
    parseInt(sayi.textContent)
  );

  for (i = 0; i < rastgeleSayilar.length - 1; i++) {
    for (let j = i + 1; j < rastgeleSayilar.length; j++) {
      if (rastgeleSayilar[i] < rastgeleSayilar[j]) {
        // Sayıları yer değiştiriyoruz.
        let temp = rastgeleSayilar[i];
        rastgeleSayilar[i] = rastgeleSayilar[j];
        rastgeleSayilar[j] = temp;
      }
    }
  }
  let sayiListesi = document.getElementById("sayılar");
  sayiListesi.innerHTML = "";
  for (let sayi of rastgeleSayilar) {
    sayiListesi.innerHTML += `<li>${sayi}</li>`;
  }
}

function kucuktenBuyugeSirala() {
    let Sayilar = document.getElementById("sayılar").getElementsByTagName("li");
    let rastgeleSayilar = Array.from(Sayilar, (sayi) =>
      parseInt(sayi.textContent)
    );
  
    for (i = 0; i < rastgeleSayilar.length - 1; i++) {
      for (let j = i + 1; j < rastgeleSayilar.length; j++) {
        if (rastgeleSayilar[i] > rastgeleSayilar[j]) {
          // Sayıları yer değiştiriyoruz.
          let temp = rastgeleSayilar[i];
          rastgeleSayilar[i] = rastgeleSayilar[j];
          rastgeleSayilar[j] = temp;
        }
      }
    }
    let sayiListesi = document.getElementById("sayılar");
    sayiListesi.innerHTML = "";
    for (let sayi of rastgeleSayilar) {
      sayiListesi.innerHTML += `<li>${sayi}</li>`;
    }
  }
  