


<!-- Tambahkan di dalam tag <section class="content"> -->

<section class="content">
    <!-- ... (bagian kode yang sudah ada sebelumnya) ... -->

    <!-- Form Tambah Produk -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">Tambah Produk Baru</h3>
        </div>
        <div class="box-body">
              <form id="form-tambah-produk" action="<?=base_url('product/create');?>" method="post">
                <div class="form-group">
                  <label>Gambar Produk</label>
                  <input type="file" class="form-control" name="image" accept="image/*" required>
                </div>
                <div class="form-group">
                    <label>Nama Produk</label>
                    <input type="text" class="form-control" name="product_name" placeholder="Masukkan Nama Produk" required>
                </div>
                <div class="form-group">
                    <label>Satuan</label>
                    <input type="text" class="form-control" name="satuan" placeholder="Masukkan Satuan Produk" required>
                </div>
                <div class="form-group">
                    <label>Harga Beli</label>
                    <input type="text" class="form-control" name="harga_beli" placeholder="Masukkan Harga Beli" required>
                </div>
                <div class="form-group">
                    <label>Harga Jual</label>
                    <input type="text" class="form-control" name="harga_jual" placeholder="Masukkan Harga Jual" required>
                </div>
                <div class="form-group">
                    <label>Diskon</label>
                    <input type="text" class="form-control" name="diskon" placeholder="Masukkan Diskon">
                </div>
                <div class="form-group">
                    <label>Stok</label>
                    <input type="text" class="form-control" name="stok" placeholder="Masukkan Stok Produk" required>
                </div>
                <button type="submit" class="btn btn-primary">Simpan Produk</button>
            </form>
        </div>
    </div>
</section>
