$.fn.datepicker.dates["id-ID"] = {
  days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  daysShort: ["Ming", "sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  daysMin: ["M", "S", "S", "R", "K", "J", "S"],
  months: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  today: "Sekarang",
  clear: "Clear",
  format: "dd MM yyyy",
  titleFormat: "MM yyyy" /* Leverages same syntax as 'format' */,
  weekStart: 0,
};

$("#date").datepicker({
  autoclose: "enable",
  language: "id-ID",
});

$(document).ready(function () {
  $("#submitData").click(function () {
    const jenisLayanan = $("#dropdown-jenis").val();
    const produk = $("#dropdown-produk").val();
    const tanggalPesanan = $("#date").val();

    alert(`aku lagi di ${jenisLayanan}
mau pesan ${produk}
di tanggal ${tanggalPesanan}
`)
  });
});

const layananKategori = {
  "Datang ke Studio": ["Facial", "SPA", "Hair Treatment"],
  "Home care": ["Facial"]
}

window.onload = function () {
  const selectLayanan =  document.getElementById('dropdown-jenis'),
    ddMenu = document.getElementById('dropdown-produk'),
    date = document.getElementById('date'),
    selects = document.querySelectorAll('select')

    ddMenu.disabled = true
    date.disabled = true

    selects.forEach(select => {
      if(select.disabled == true){
        select.style.cursor = "auto"
      }
    })

    for(let layanan in layananKategori){
      console.log(layanan);
      selectLayanan.options[selectLayanan.options.length] = new Option(layanan, layanan)
      // console.log(layananKategori);
    }

    selectLayanan.onchange = (e) => {
      ddMenu.disabled = false

      date.disabled = true
      
      ddMenu.length = 1
      date.length = 1

     let menus = layananKategori[selectLayanan.value]

     for(let i=0; i<menus.length;i++){
      ddMenu.options[ddMenu.options.length] = new Option(menus[i], menus[i])
     }
    }

    ddMenu.onchange = (e) => {
      date.disabled = false
    }
}

