const videos = Array.from(document.querySelectorAll("[data-duration]"));

let jsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);

const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan -= jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam,${menit} Menit,${detik} Detik`;

const totalVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = totalVideo;
