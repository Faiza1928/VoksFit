document.addEventListener('DOMContentLoaded', function() {
    console.log('Website VoksFit! siap digunakan!');

    // Efek gulir animasi untuk navigasi
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) { // Cek apakah elemen tujuan ada
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Elemen dengan ID ${targetId} tidak ditemukan.`);
            }
        });
    });

    // Tombol "Pick Your Style" untuk navigasi ke halaman departemen
    function scrollToDepartments() {
    const departmentSection = document.querySelector("#departments");
    departmentSection.scrollIntoView({ behavior: "smooth" });
}

});