 // custom cursor
    const cursor = document.getElementById('cursorDot');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 4 + 'px';
        cursor.style.top = e.clientY - 4 + 'px';
    });

    // Typing animation (expert)
    const roles = ["Full-Stack Architect", "React/Next Expert", "Creative Coder", "Performance Geek", "UI Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedSpan = document.getElementById("dynamicType");
    function typeEffect() {
        const current = roles[roleIndex];
        if (isDeleting) {
            typedSpan.innerText = current.substring(0, charIndex-1);
            charIndex--;
        } else {
            typedSpan.innerText = current.substring(0, charIndex+1);
            charIndex++;
        }
        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex+1) % roles.length;
            setTimeout(typeEffect, 200);
            return;
        }
        const speed = isDeleting ? 60 : 100;
        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // mobile menu
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navMenu');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }

    // smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            const targetElem = document.querySelector(targetId);
            if(targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });

    // resume download simulation (alert with details)
    const resumeBtn = document.getElementById('downloadResumeBtn');
    if(resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            alert("📄 Neeraj Tiwari - Web Developer Portfolio\nContact: +91 9559381745 | neeraj.tiwari@devportfolio.com\nExpertise: React, Node, TypeScript, Next.js, UI Engineering.\nResume shared via email upon request.");
        });
    }

    // add active section highlight
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-menu ul li a");
    function highlightNav() {
        let current = "";
        const scrollPos = window.scrollY + 150;
        sections.forEach(sec => {
            const offset = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= offset && scrollPos < offset + height) {
                current = sec.getAttribute("id");
            }
        });
        navItems.forEach(link => {
            const href = link.getAttribute("href").substring(1);
            if (href === current) {
                link.style.color = "#4cff9e";
                link.style.textShadow = "0 0 3px #4cff9e";
            } else {
                link.style.color = "#cfcfcf";
                link.style.textShadow = "none";
            }
        });
    }
    window.addEventListener("scroll", highlightNav);
    window.addEventListener("load", highlightNav);