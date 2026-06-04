    (function() {
        // DARK MODE LOGIC (preserves original toggle functionality + smooth styling)
        const toggleCheckbox = document.getElementById('darkmodeToggle');
        const body = document.body;
        
        // check local storage for theme preference
        const savedTheme = localStorage.getItem('loginTheme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            if (toggleCheckbox) toggleCheckbox.checked = true;
        } else {
            // default light
            body.classList.remove('dark-mode');
            if (toggleCheckbox) toggleCheckbox.checked = false;
        }
        
        if (toggleCheckbox) {
            toggleCheckbox.addEventListener('change', function(e) {
                if (this.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('loginTheme', 'dark');
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('loginTheme', 'light');
                }
            });
        }
        
        // INTERACTIVE FEEDBACKS (no broken layout, all alerts just demonstration)
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        const forgotBtn = document.getElementById('forgotPwd');
        const signupLink = document.getElementById('signupTrigger');
        const appleBtn = document.getElementById('appleLoginBtn');
        const googleBtn = document.getElementById('googleLoginBtn');
        
        // Helper toast or alert (clean UX without intrusive spam)
        function showMessage(msg, type = 'info') {
            // simple but elegant: temporary alert replacement with console and gentle dialog? 
            // we use a non-blocking alert style to maintain professionalism, but for demo we can use alert? 
            // better: fallback small alert because it's a prototype: but consistent.
            // But we prefer not to ruin UI. Use modern alert? 
            alert(msg);
        }
        
        // Login submit handler (prevent actual submission)
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = emailInput.value.trim();
                const pwd = passwordInput.value.trim();
                if (!email) {
                    showMessage('Please enter your email address.', 'warning');
                    emailInput.focus();
                    return;
                }
                if (!pwd) {
                    showMessage('Please enter your password.', 'warning');
                    passwordInput.focus();
                    return;
                }
                if (!email.includes('@') || !email.includes('.')) {
                    showMessage('Enter a valid email address (e.g., name@example.com)', 'warning');
                    return;
                }
                showMessage(`✨ Welcome back! (Demo login successful for ${email})`, 'success');
                // in a real app you would redirect or call API
            });
        }
        
        // Forgot password demo
        if (forgotBtn) {
            forgotBtn.addEventListener('click', () => {
                showMessage('🔐 Password reset link would be sent to your registered email.', 'info');
            });
        }
        
        // Sign up demo
        if (signupLink) {
            signupLink.addEventListener('click', () => {
                showMessage('📝 Create a new account – feature coming soon!', 'info');
            });
        }
        
        // Apple & Google demo actions
        if (appleBtn) {
            appleBtn.addEventListener('click', () => {
                showMessage('🍎 Sign in with Apple (demo integration)', 'info');
            });
        }
        
        if (googleBtn) {
            googleBtn.addEventListener('click', () => {
                showMessage('🔑 Sign in with Google – connecting to OAuth (demo)', 'info');
            });
        }
        
        // Additional fix: ensure placeholder colors visible if dark mode applies properly
        // Also correct any missing style: input background and text contrast fixed via CSS.
        console.log('Login interface fully repaired — no layout interruption, visible labels & fields');
    })();