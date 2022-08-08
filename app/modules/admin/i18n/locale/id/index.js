const localeIndo = {
  ra: {
    action: {
      add_filter: "Tambahkan filter",
      add: "Tambahkan",
      back: "Kembali",
      bulk_actions: "1 item terpilih |||| %{smart_count} item terpilih",
      cancel: "Batal",
      clear_input_value: "Kosongkan input",
      clone: "Duplikat",
      confirm: "Konfirmasi",
      create: "Buat",
      create_item: "Buat %{item}",
      delete: "Hapus",
      edit: "Ubah",
      export: "Ekspor",
      list: "Daftar",
      refresh: "Perbaharui",
      remove_filter: "Hapus filter",
      remove: "Hapus",
      save: "Simpan",
      search: "Mencari",
      select_all: "Pilih semua",
      select_row: "Pilih baris ini",
      show: "Tampilkan",
      sort: "Pengurutan",
      undo: "Batalkan",
      unselect: "Batal Pilih",
      expand: "Memperbesar",
      close: "Tutup",
      open_menu: "Buka menu",
      close_menu: "Tutup menu",
      update: "Memperbarui",
      move_up: "Naik",
      move_down: "Turun",
    },
    boolean: {
      true: "Ya",
      false: "Tidak",
      null: "",
    },
    page: {
      create: "Buat %{name}",
      dashboard: "Dasbor",
      edit: "%{name} #%{id}",
      error: "Ada yang salah",
      list: "%{name}",
      loading: "Pemuatan",
      not_found: "Tidak ditemukan",
      show: "%{name} #%{id}",
      empty: "%{name} Belum ada.",
      invite: "Apakah anda ingin menambahkan satu?",
    },
    input: {
      file: {
        upload_several:
          "Letakan beberapa file untuk diunggah, atau klik untuk memilihnya.",
        upload_single:
          "Letakan file yang akan diunggah, atau klik untuk memilihnya.",
      },
      image: {
        upload_several:
          "Letakan beberapa gambar untuk diunggah, atau klik untuk memilihnya.",
        upload_single:
          "Letakan gambar untuk diunggah, atau klik untuk memilihnya.",
      },
      references: {
        all_missing: "Tidak dapat menemukan data referensi.",
        many_missing: "Setidaknya satu referensi terkait tidak lagi tersedia.",
        single_missing: "Referensi terkait tidak lagi tersedia.",
      },
      password: {
        toggle_visible: "Sembunyikan kata sandi",
        toggle_hidden: "Tampilkan kata sandi",
      },
    },
    message: {
      about: "Tentang",
      are_you_sure: "Apakah anda yakin?",
      bulk_delete_content:
        "Anda yakin ingin menghapus %{name} ini? |||| Anda yakin ingin menghapus %{smart_count} item ini?",
      bulk_delete_title: "Hapus %{name} |||| Hapus %{smart_count} %{name}",
      bulk_update_content:
        "Anda yakin ingin memperbarui %{name} ini? |||| Anda yakin ingin memperbarui %{smart_count} item ini?",
      bulk_update_title:
        "Memperbarui %{name} |||| Memperbarui %{smart_count} %{name}",
      delete_content: "Anda yakin ingin menghapus item ini?",
      delete_title: "Hapus %{name} #%{id}",
      details: "Detail",
      error:
        "Terjadi kesalahan pada klien dan permintaan Anda tidak dapat diselesaikan.",
      invalid_form:
        "Formulir tidak valid, ada kesalahan. Silakan periksa kembali",
      loading: "Halaman ini sedang memuat, silahkan tunggu sebentar",
      no: "Tidak",
      not_found:
        "Entah Anda mengetikkan URL yang salah, atau Anda memiliki link yang salah.",
      yes: "Ya",
      unsaved_changes:
        "Beberapa perubahan belum anda simpan. Anda yakin ingin mengabaikannya?",
    },
    navigation: {
      no_results: "Tidak ada hasil yang ditemukan",
      no_more_results: "Halaman %{page} tidak ada. Coba halaman sebelumnya.",
      page_out_of_boundaries: "Halaman %{page} tidak ada",
      page_out_from_end: "Halaman terakhir",
      page_out_from_begin: "Halaman harus lebih besar dari pertama",
      page_range_info: "%{offsetBegin}-%{offsetEnd} of %{total}",
      page_rows_per_page: "Baris per halaman:",
      next: "Berikutnya",
      prev: "Sebelumnya",
      skip_nav: "Lewati ke konten",
    },
    sort: {
      sort_by: "Urutkan dengan %{field} %{order}",
      ASC: "naik",
      DESC: "turun",
    },
    auth: {
      auth_check_error: "Silahkan masuk untuk melanjutkan",
      user_menu: "Profil",
      username: "Nama pengguna",
      password: "Kata sandi",
      sign_in: "Masuk",
      sign_in_error: "Otentikasi gagal, coba lagi",
      logout: "Keluar",
    },
    notification: {
      updated:
        "Elemen telah diperbaharui |||| %{smart_count} element telah diperbaharui",
      created: "Elemen telah dibuat",
      deleted: "Elemen telah dihapus |||| %{smart_count} elemen telah dihapus",
      bad_item: "Element salah",
      item_doesnt_exist: "Elemen tidak ada",
      http_error: "Kesalahan komunikasi server",
      data_provider_error:
        "kesalahan pada dataProvider. Periksa konsol untuk detailnya.",
      i18n_error: "Tidak dapat memuat terjemahan untuk bahasa yang ditentukan",
      canceled: "Aksi Telah dibatalkan",
      logged_out: "Sesi Anda telah berakhir, harap sambungkan kembali.",
      not_authorized: "Anda tidak diizinkan untuk mengakses sumber daya ini.",
    },
    validation: {
      required: "Wajib",
      minLength: "Harus %{min} karakter setidaknya",
      maxLength: "Harus %{max} karakter atau kurang",
      minValue: "Harus %{min} setidaknya",
      maxValue: "harus %{max} atau kurang",
      number: "Harus angka",
      email: "Harus alamat email yang valid",
      oneOf: "Harus salah satu dari: %{options}",
      regex: "Harus sesuai dengan format tertentu (regexp): %{pattern}",
    },
  },
};
export default localeIndo;
