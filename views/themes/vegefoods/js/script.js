// Bagian dari skrip JavaScript pada halaman Anda
$(document).ready(function () {
	$("#form-tambah-produk").submit(function (e) {
		e.preventDefault();

		// Mengirim data form ke server menggunakan AJAX
		$.ajax({
			type: "POST",
			url: "url_ke_controller/simpan_produk", // Ganti dengan URL yang sesuai
			data: $(this).serialize(),
			dataType: "json",
			success: function (response) {
				if (response.status === "success") {
					// Refresh tabel produk setelah penyimpanan berhasil
					refreshTable();
					// Tambahkan notifikasi atau pesan keberhasilan di sini jika diperlukan
					alert("Produk berhasil disimpan!");
				} else {
					// Tambahkan logika jika ada kesalahan saat menyimpan
					alert("Gagal menyimpan produk. Silakan coba lagi.");
				}
			},
			error: function () {
				// Tambahkan logika jika terjadi kesalahan koneksi atau permintaan
				alert(
					"Terjadi kesalahan saat menyimpan produk. Mohon periksa koneksi internet Anda."
				);
			},
		});
	});

	// Fungsi untuk memperbarui tabel produk setelah penyimpanan berhasil
	function refreshTable() {
		// Lakukan pengambilan data produk terbaru dari server
		// dan perbarui tabel produk di halaman menggunakan AJAX
		$.ajax({
			type: "GET",
			url: "url_ke_endpoint_produk", // Ganti dengan URL endpoint untuk mengambil data produk
			dataType: "html",
			success: function (data) {
				// Update tabel produk dengan data terbaru
				$("#tabel-produk").html(data);
				// Tambahkan logika lain jika diperlukan setelah pembaruan tabel
			},
			error: function () {
				// Tambahkan logika jika terjadi kesalahan saat mengambil data produk
				alert("Terjadi kesalahan saat memperbarui tabel produk.");
			},
		});
	}
});
