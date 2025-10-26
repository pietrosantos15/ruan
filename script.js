document.addEventListener('DOMContentLoaded', function() {
    // Lógica do Menu Mobile e Scroll Suave (mantida)
    const headerContent = document.querySelector('.header-content');
    const nav = document.querySelector('.nav');

    if (window.innerWidth <= 767 && headerContent && nav) {
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('menu-toggle');
        toggleButton.innerHTML = '&#9776;';
        toggleButton.setAttribute('aria-label', 'Abrir Menu');
        headerContent.appendChild(toggleButton);

        toggleButton.addEventListener('click', function() {
            nav.classList.toggle('active'); 
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if(nav && nav.classList.contains('active')) {
               nav.classList.remove('active');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // -------------------- LÓGICA DO CARROSSEL DE EQUIPE --------------------
    const carousel = document.getElementById('teamCarousel');
    if (carousel) {
        const members = carousel.querySelectorAll('.team-member');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        const totalMembers = members.length;

        function updateCarousel(newIndex) {
            // Remove a classe ativa do membro atual
            if (members[currentIndex]) {
                members[currentIndex].classList.remove('active-member');
            }
            
            // Calcula o novo índice
            if (newIndex >= totalMembers) {
                currentIndex = 0;
            } else if (newIndex < 0) {
                currentIndex = totalMembers - 1;
            } else {
                currentIndex = newIndex;
            }

            // Adiciona a classe ativa ao novo membro
            if (members[currentIndex]) {
                members[currentIndex].classList.add('active-member');
            }
        }

        prevBtn.addEventListener('click', () => {
            updateCarousel(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            updateCarousel(currentIndex + 1);
        });
        
        // Garante que o primeiro membro esteja ativo ao carregar a página
        updateCarousel(0); 
    }
});