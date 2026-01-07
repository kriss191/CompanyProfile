// Ambil semua checkbox
console.log("Terhubung");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Ambil status dari localStorage saat halaman dibuka
checkboxes.forEach(cb => {
    const saved = localStorage.getItem(cb.id);
    if (saved === "true") {
        cb.checked = true;
    }
});

// Simpan status saat checkbox berubah
checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
        localStorage.setItem(cb.id, cb.checked);
    });
});
