let isim = prompt("Lütfen isminizi yazın :");
let nameInfo = document.querySelector("#myName");

nameInfo.innerHTML = `${isim}`;
nameInfo.innerHTML = isim.toLocaleUpperCase();

if (isim == "") {
  alert("İsminizi boş bıraktınız!");
}

var tarih = new Date();
var gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
if (isim != "") {
  function showTime() {
    const date = new Date().toLocaleString();
    let myClock = document.querySelector("#myClock");
    myClock.innerHTML = `${date} ${gunler[tarih.getDay()].toUpperCase()}`;
  }

  setInterval(function () {
    showTime();
  }, 1000);
}
