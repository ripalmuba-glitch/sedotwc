// 1. Inisialisasi AOS (Animate On Scroll)
AOS.init({
    once: true, // Animasi hanya berjalan sekali saat scroll
    offset: 120, // Offset trigger
    duration: 1000,
    easing: 'ease-out-cubic',
});

// 2. Preloader Handler
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// 3. Navbar Scroll Effect
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 4. Smooth Scroll Fix (Agar tidak tertutup navbar sticky)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Tutup menu mobile jika sedang terbuka
            const offcanvasEl = document.getElementById('mobileMenu');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (offcanvas) {
                offcanvas.hide();
            }
        }
    });
});