const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    // Mengambil nilai input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    // Mengambil elemen error
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const namaError = document.getElementById("namaError");
    const tanggalLahirError = document.getElementById("tanggalLahirError");
    const alamatError = document.getElementById("alamatError");
    const teleponError = document.getElementById("teleponError");

    // Menghapus pesan error sebelumnya
    usernameError.textContent = "";
    passwordError.textContent = "";
    namaError.textContent = "";
    tanggalLahirError.textContent = "";
    alamatError.textContent = "";
    teleponError.textContent = "";

    let valid = true;


    // =========================
    // VALIDASI USERNAME
    // =========================

    if (username === "") {

        usernameError.textContent =
            "Username tidak boleh kosong.";

        valid = false;

    } else if (username.length < 3) {

        usernameError.textContent =
            "Username minimal 3 karakter.";

        valid = false;
    }


    // =========================
    // VALIDASI PASSWORD
    // =========================

    if (password === "") {

        passwordError.textContent =
            "Password tidak boleh kosong.";

        valid = false;

    } else if (password.length < 8) {

        passwordError.textContent =
            "Password minimal 8 karakter.";

        valid = false;
    }


    // =========================
    // VALIDASI NAMA
    // =========================

    if (nama === "") {

        namaError.textContent =
            "Nama tidak boleh kosong.";

        valid = false;
    }


    // =========================
    // VALIDASI TANGGAL LAHIR
    // =========================

    if (tanggalLahir === "") {

        tanggalLahirError.textContent =
            "Tanggal lahir tidak boleh kosong.";

        valid = false;

    } else {

        const tanggalInput = new Date(tanggalLahir);

        const hariIni = new Date();

        hariIni.setHours(0, 0, 0, 0);

        /*
        Tanggal lahir tidak boleh future date.
        Artinya tanggal lahir harus <= hari ini.
        */

        if (tanggalInput > hariIni) {

            tanggalLahirError.textContent =
                "Tanggal lahir tidak boleh di masa depan.";

            valid = false;
        }
    }


    // =========================
    // VALIDASI ALAMAT
    // =========================

    if (alamat === "") {

        alamatError.textContent =
            "Alamat tidak boleh kosong.";

        valid = false;
    }


    // =========================
    // VALIDASI NOMOR TELEPON
    // =========================

    if (telepon === "") {

        teleponError.textContent =
            "Nomor telepon tidak boleh kosong.";

        valid = false;

    } else if (!telepon.startsWith("62")) {

        teleponError.textContent =
            "Nomor telepon harus diawali dengan 62.";

        valid = false;

    } else if (!/^[0-9]+$/.test(telepon)) {

        teleponError.textContent =
            "Nomor telepon hanya boleh berisi angka.";

        valid = false;
    }


    // =========================
    // HASIL VALIDASI
    // =========================

    if (!valid) {

        // Mencegah pindah ke dashboard
        event.preventDefault();

    }

});