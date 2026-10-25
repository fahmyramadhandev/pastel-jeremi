const nomorWA = '6283115601008';

const semuaMenu = document.querySelectorAll('.menu-card');
const keranjang = document.getElementById('keranjang');
const linkPesan = document.getElementById('linkPesan');
const totalItem = document.getElementById('totalItem');
const totalHarga = document.getElementById('totalHarga');

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

function ubahJumlah(card, tambah) {
  const jumlahEl = card.querySelector('.jumlah');
  let jumlah = parseInt(jumlahEl.textContent) + tambah;
  if (jumlah < 0) jumlah = 0;

  jumlahEl.textContent = jumlah;

  if (jumlah > 0) {
    card.classList.add('dipilih');
  } else {
    card.classList.remove('dipilih');
  }

  updateKeranjang();
}

function updateKeranjang() {
  let jumlahPastel = 0;
  let total = 0;
  let pesan = 'Halo Pastel Jeremi, saya mau pesan:\n';

  semuaMenu.forEach(function (card) {
    const jumlah = parseInt(card.querySelector('.jumlah').textContent);
    if (jumlah > 0) {
      const nama = card.dataset.nama;
      const harga = parseInt(card.dataset.harga);

      jumlahPastel += jumlah;
      total += harga * jumlah;
      pesan += '- ' + nama + ' x ' + jumlah + ' = ' + formatRupiah(harga * jumlah) + '\n';
    }
  });

  pesan += 'Total: ' + formatRupiah(total);

  totalItem.textContent = jumlahPastel + ' pastel';
  totalHarga.textContent = formatRupiah(total);
  linkPesan.href = 'https://wa.me/' + nomorWA + '?text=' + encodeURIComponent(pesan);

  if (jumlahPastel > 0) {
    keranjang.classList.add('tampil');
    document.body.classList.add('ada-pesanan');
  } else {
    keranjang.classList.remove('tampil');
    document.body.classList.remove('ada-pesanan');
  }
}

semuaMenu.forEach(function (card) {
  card.querySelector('.btn-tambah').addEventListener('click', function () {
    ubahJumlah(card, 1);
  });

  card.querySelector('.btn-plus').addEventListener('click', function () {
    ubahJumlah(card, 1);
  });

  card.querySelector('.btn-kurang').addEventListener('click', function () {
    ubahJumlah(card, -1);
  });
});
