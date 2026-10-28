const nomorWA = '6283115601008';

const semuaItem = document.querySelectorAll('.item');
const notaBaris = document.getElementById('notaBaris');
const notaKosong = document.getElementById('notaKosong');
const totalItem = document.getElementById('totalItem');
const totalHarga = document.getElementById('totalHarga');
const linkPesan = document.getElementById('linkPesan');

function rupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

function ubahJumlah(item, selisih) {
  const el = item.querySelector('.jumlah');
  const jumlah = Math.max(0, parseInt(el.textContent, 10) + selisih);

  el.textContent = jumlah;
  item.querySelector('.kurang').disabled = jumlah === 0;
  item.classList.toggle('dipilih', jumlah > 0);

  updateNota();
}

function updateNota() {
  let banyak = 0;
  let total = 0;
  let pesan = 'Halo Pastel Jeremi, saya mau pesan:\n';

  notaBaris.textContent = '';

  semuaItem.forEach(function (item) {
    const jumlah = parseInt(item.querySelector('.jumlah').textContent, 10);
    if (jumlah === 0) return;

    const nama = item.dataset.nama;
    const subtotal = parseInt(item.dataset.harga, 10) * jumlah;

    banyak += jumlah;
    total += subtotal;
    pesan += '- ' + nama + ' x ' + jumlah + ' = ' + rupiah(subtotal) + '\n';

    // baris nota pakai textContent, bukan innerHTML
    const li = document.createElement('li');
    const kiri = document.createElement('span');
    const kanan = document.createElement('span');
    kiri.textContent = jumlah + ' × ' + nama.replace('Pastel ', '');
    kanan.textContent = rupiah(subtotal);
    li.append(kiri, kanan);
    notaBaris.append(li);
  });

  pesan += 'Total: ' + rupiah(total);

  totalItem.textContent = banyak + ' pastel';
  totalHarga.textContent = rupiah(total);
  notaKosong.hidden = banyak > 0;
  linkPesan.href = 'https://wa.me/' + nomorWA + '?text=' + encodeURIComponent(pesan);

  document.body.classList.toggle('ada-pesanan', banyak > 0);
}

semuaItem.forEach(function (item) {
  item.querySelector('.tambah').addEventListener('click', function () {
    ubahJumlah(item, 1);
  });
  item.querySelector('.kurang').addEventListener('click', function () {
    ubahJumlah(item, -1);
  });
});
