document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function () {
        let current = '';

        // Dapatkan posisi scroll vertikal
        let scrollPosition = window.scrollY;

        // Loop melalui setiap tautan navigasi
        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));

            // Periksa apakah bagian saat ini terlihat di dalam viewport
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                current = link.getAttribute('href').substring(1);
            }
        });

        // Hapus kelas 'active' dari semua tautan navigasi
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke tautan yang sesuai dengan bagian saat ini
        if (current !== '') {
            document.querySelector('.navbar a[href="#' + current + '"]').classList.add('active');
        }
    });
});
