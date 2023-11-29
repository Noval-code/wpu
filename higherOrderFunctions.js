console.log("latihan higher order function");

// ambil semua elemen video
// mengubah node list menjadi bentuk array dengan Array.form()
const videos = Array.from(document.querySelectorAll("[data-duration"));

// pilih hanya yang 'Javascript Lanjutan'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
//ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jumlahVideo = Array.from(document.querySelectorAll("[data-duration")).length;
const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = `${jumlahVideo} video`;
console.log(jsLanjut);
