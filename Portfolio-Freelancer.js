 // Mobile navigation toggle (unique class)
    const mobBtn = document.getElementById('mobileTrigger');
    const navPanel = document.getElementById('dynamicNav');
    if (mobBtn && navPanel) {
        mobBtn.addEventListener('click', () => {
            navPanel.classList.toggle('open');
        });
        // Close when clicking nav links
        const allNavLinks = navPanel.querySelectorAll('a');
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navPanel.classList.remove('open');
            });
        });
    }
    
    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const element = document.querySelector(targetId);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // interactive collab button (vibrant feedback)
    const collabBtn = document.getElementById('collabButton');
    if (collabBtn) {
        collabBtn.addEventListener('click', () => {
            alert("🔥 Awesome! Let's create something electric. Write to hello@mayachen.design");
        });
    }
    
    // Scroll active highlight (support dynamic)
    const sectionsDynamic = document.querySelectorAll("section");
    const navDynamicItems = document.querySelectorAll(".nav-menu ul li a");
    function setActiveNav() {
        let currentId = "";
        const scrollPosition = window.scrollY + 140;
        sectionsDynamic.forEach(sec => {
            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;
            if (scrollPosition >= top && scrollPosition < bottom) {
                currentId = sec.getAttribute("id");
            }
        });
        navDynamicItems.forEach(link => {
            const hrefRaw = link.getAttribute("href").substring(1);
            if (hrefRaw === currentId) {
                link.style.color = "#FDE047";
                link.style.borderBottomColor = "#F97316";
            } else {
                link.style.color = "#e2e8f0";
                link.style.borderBottomColor = "transparent";
            }
        });
    }
    window.addEventListener("scroll", setActiveNav);
    window.addEventListener("load", setActiveNav);