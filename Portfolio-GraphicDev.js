 // Mobile navigation toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isExpanded = navMenu.classList.contains('open');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });
        
        // close mobile menu when clicking any nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // update URL without jumping (optional)
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // subtle interactive alert for collaborate button (optional)
    const collabBtn = document.getElementById('collabBtn');
    if (collabBtn) {
        collabBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("✶ Let's create something iconic. Reach out via email: hello@reallygreatsite.com");
        });
    }
    
    // Additional active highlight on scroll (simple)
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-menu ul li a");
    
    function setActiveLink() {
        let current = "";
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
        navItems.forEach(link => {
            link.classList.remove("active");
            const href = link.getAttribute("href").substring(1);
            if (href === current) {
                link.style.color = "#ffffff";
                link.style.fontWeight = "600";
                // add subtle pseudo effect
            } else {
                link.style.color = "#dddddd";
                link.style.fontWeight = "500";
            }
        });
    }
    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("load", setActiveLink);