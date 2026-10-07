/**
 * ROHAN // SOFTWARE ENGINEER & SYSTEMS ARCHITECT
 * Core Interactive Application Engine
 * Aesthetic: Dark Developer x Luxury Glass x Futuristic 3D x Cinematic
 */

(function () {
    'use strict';

    // ==========================================
    // 1. STATE & CONFIGURATION
    // ==========================================
    const state = {
        sfxEnabled: false,
        audioCtx: null,
        activeProject: null,
        mouse: { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: 0, targetY: 0 }
    };

    // Project Data for Interactive Deep-Dive Modal
    const projectsData = {
        "iot-dustbin": {
            title: "IoT Based Smart Dustbin System",
            category: "IOT HARDWARE // EMBEDDED CLOUD SYSTEMS",
            image: "assets/images/project-iot-dustbin.jpg",
            status: "HARDWARE PROTOTYPE // VERIFIED",
            specs: {
                "MICROCONTROLLER": "ESP32 / NodeMCU",
                "SENSOR TYPE": "HC-SR04 Ultrasonic",
                "ALERT THRESHOLD": "80% Capacity Trigger",
                "PROTOCOL": "MQTT / HTTP Webhooks",
                "NOTIFICATION": "Instant Mobile Push API",
                "POWER CONSUMPTION": "Ultra-Low Sleep Mode"
            },
            overview: "An intelligent waste management system engineered to automate municipal and enterprise sanitation. Utilizing ultrasonic distance sensors calibrated inside the receptacle, the microcontroller continuously monitors waste volume and dispatches instant push alerts to mobile phones whenever the bin reaches 80% capacity.",
            architecture: "Features an ESP32 microcontroller running embedded C++ firmware with adaptive noise filtering on sensor distance reads. Implements low-power WiFi sleep modes and secure MQTT transmission to a cloud gateway triggering Firebase Cloud Messaging (FCM) mobile notifications.",
            codeSnippet: `// Ultrasonic Distance Sampling & 80% Full Capacity Alert Trigger
void checkDustbinLevel() {
    long duration;
    float distanceCm;
    
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);
    
    duration = pulseIn(ECHO_PIN, HIGH);
    distanceCm = duration * 0.034 / 2.0;
    
    float fillPercentage = ((BIN_HEIGHT - distanceCm) / BIN_HEIGHT) * 100.0;
    if (fillPercentage >= 80.0 && !alertSent) {
        transmitSmartPhoneAlert(fillPercentage);
        alertSent = true;
    } else if (fillPercentage < 20.0) {
        alertSent = false; // Reset threshold after bin emptied
    }
}`,
            liveUrl: "#",
            githubUrl: "https://GitHub.com/rohankumbarhall"
        },
        "email-fraud": {
            title: "Fraud Email Detector & Virus Debugger",
            category: "CYBERSECURITY // AI THREAT DETECTION",
            image: "assets/images/project-email-fraud.jpg",
            status: "ANALYSIS ENGINE // PRODUCTION READY",
            specs: {
                "DETECTION ACCURACY": "99.4% F1-Score",
                "ANALYSIS LATENCY": "18ms / message",
                "THREAT SANDBOX": "Isolated AST Payload",
                "LEXICAL ENGINE": "NLP Heuristic Classifier",
                "MALWARE SIGNATURES": "YARA & Virus DB Feed",
                "BACKEND": "Python FastAPI Core"
            },
            overview: "A comprehensive email threat analyzer and malware diagnostic tool. It ingests raw MIME messages, parses DKIM/SPF/DMARC headers, inspects attachment file signatures in a secure sandbox, and detects fraud, BEC (Business Email Compromise), and malicious payload viruses while providing step-by-step diagnostic feedback.",
            architecture: "Implements a multi-layered detection pipeline combining lexical TF-IDF vectorization, link redirect unpackers, and an isolated malware debugger that disassembles suspicious attachment payloads to identify virus execution vectors before they reach the user.",
            codeSnippet: `async def analyze_email_payload(raw_mime: bytes) -> EmailAuditVerdict:
    """Parses email headers, links, and attachments to detect fraud and viruses."""
    msg = parse_mime_structure(raw_mime)
    
    # 1. Inspect cryptographic authentication (SPF/DKIM/DMARC)
    auth_score = verify_sender_reputation(msg.headers)
    
    # 2. NLP heuristic analysis on email body
    fraud_prob = nlp_classifier.predict_fraud_intent(msg.plain_body)
    
    # 3. Sandbox attachment virus analysis
    quarantine_threats = []
    for attachment in msg.attachments:
        threat_report = sandbox_debugger.scan_file(attachment.bytes)
        if threat_report.is_malicious:
            quarantine_threats.append(threat_report)
            
    return EmailAuditVerdict(
        is_fraud=(fraud_prob > 0.75 or auth_score < 0.3),
        confidence=fraud_prob,
        quarantined_viruses=quarantine_threats,
        remediation_advice=generate_debug_feedback(quarantine_threats)
    )`,
            liveUrl: "#",
            githubUrl: "https://GitHub.com/rohankumbarhall"
        },
        "url-phishing": {
            title: "Phishing URL Scanner & Authenticator",
            category: "WEB SECURITY // ZERO-TRUST VERIFIER",
            image: "assets/images/project-url-phishing.jpg",
            status: "REAL-TIME VERIFIER // ACTIVE",
            specs: {
                "SCAN SPEED": "12ms Real-Time Lookup",
                "HOMOGRAPH DEFENSE": "IDN Punycode Inspection",
                "CERTIFICATE CHECK": "TLS/SSL Validity Matrix",
                "DNS REPUTATION": "WHOIS Age & Nameserver Audit",
                "REDIRECT UNPACKER": "Recursive 10-Hop Tracer",
                "STACK": "JavaScript / Node.js & Python"
            },
            overview: "An automated real-time URL authentication and phishing verification engine. Protects users against deceptive links by examining domain typosquatting, IDN homograph spoofing, domain age via WHOIS, SSL certificate validity, and deep HTTP redirect chains.",
            architecture: "Constructs a multidimensional risk index by combining DNS resolving, dynamic headless browser screenshot comparison, and heuristic entropy checks against known legitimate enterprise domains.",
            codeSnippet: `// Real-Time URL Phishing Verifier & Homograph Classifier
async function verifyUrlAuthenticity(targetUrl) {
    const parsed = new URL(targetUrl);
    const punycodeHostname = punycode.toASCII(parsed.hostname);
    
    // Homograph Attack & Character Confusion Inspection
    const hasHomographSpoof = punycodeHostname.startsWith("xn--") || 
                              detectLookalikeChars(parsed.hostname);
                              
    // SSL / TLS Certificate Validity
    const certDetails = await inspectTlsCertificate(parsed.hostname);
    
    // Domain Age & DNS WHOIS Risk Score
    const domainAgeDays = await getDomainAgeInDays(parsed.hostname);
    const isRecentlyRegistered = domainAgeDays < 14;
    
    const riskScore = calculatePhishingRisk({
        hasHomographSpoof,
        certValid: certDetails.isValid,
        isRecentlyRegistered,
        entropyScore: computeEntropy(parsed.pathname)
    });
    
    return {
        url: targetUrl,
        isAuthentic: riskScore < 30,
        riskLevel: riskScore >= 70 ? 'CRITICAL_PHISHING' : (riskScore >= 30 ? 'SUSPICIOUS' : 'SAFE'),
        verdictDetails: generateSecurityReport(riskScore, certDetails)
    };
}`,
            liveUrl: "#",
            githubUrl: "https://GitHub.com/rohankumbarhall"
        }
    };

    // ==========================================
    // 2. AUDIO SYNTHESIZER (WEB AUDIO API)
    // ==========================================
    function initAudio() {
        if (!state.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                state.audioCtx = new AudioContext();
            }
        }
    }

    function playSound(type) {
        if (!state.sfxEnabled) return;
        initAudio();
        if (!state.audioCtx) return;

        if (state.audioCtx.state === 'suspended') {
            state.audioCtx.resume();
        }

        const now = state.audioCtx.currentTime;
        const osc = state.audioCtx.createOscillator();
        const gain = state.audioCtx.createGain();

        osc.connect(gain);
        gain.connect(state.audioCtx.destination);

        switch (type) {
            case 'hover':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(900, now + 0.04);
                gain.gain.setValueAtTime(0.015, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
                osc.start(now);
                osc.stop(now + 0.04);
                break;
            case 'click':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(450, now);
                osc.frequency.exponentialRampToValueAtTime(800, now + 0.07);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
                osc.start(now);
                osc.stop(now + 0.07);
                break;
            case 'open':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(680, now + 0.12);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
                osc.start(now);
                osc.stop(now + 0.12);
                break;
            case 'success':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(520, now);
                osc.frequency.exponentialRampToValueAtTime(1040, now + 0.18);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
                osc.start(now);
                osc.stop(now + 0.18);
                break;
        }
    }

    // ==========================================
    // 3. TOAST NOTIFICATION SYSTEM
    // ==========================================
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconHtml = '<i class="fa-solid fa-circle-info text-cyan"></i>';
        if (type === 'success') {
            iconHtml = '<i class="fa-solid fa-circle-check text-emerald"></i>';
        }

        toast.innerHTML = `
            ${iconHtml}
            <span>${message}</span>
        `;

        container.appendChild(toast);
        playSound('success');

        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3200);
    }

    // ==========================================
    // 4. THREE.JS 3D PARTICLE CONSTELLATION
    // ==========================================
    function initThreeCanvas() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        // Verify reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            canvas.style.display = 'none';
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 400;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create Particle Cloud
        const particleCount = window.innerWidth < 768 ? 120 : 260;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const cyanColor = new THREE.Color(0x00f0ff);
        const violetColor = new THREE.Color(0x8b5cf6);
        const whiteColor = new THREE.Color(0xffffff);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 1100;
            positions[i3 + 1] = (Math.random() - 0.5) * 850;
            positions[i3 + 2] = (Math.random() - 0.5) * 600;

            const randColor = Math.random();
            let c;
            if (randColor < 0.55) {
                c = cyanColor;
            } else if (randColor < 0.85) {
                c = violetColor;
            } else {
                c = whiteColor;
            }

            colors[i3] = c.r;
            colors[i3 + 1] = c.g;
            colors[i3 + 2] = c.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Particle Texture Creation with Dynamic Canvas
        const particleCanvas = document.createElement('canvas');
        particleCanvas.width = 32;
        particleCanvas.height = 32;
        const ctx = particleCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.3, 'rgba(0,240,255,0.7)');
        gradient.addColorStop(1, 'rgba(0,240,255,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);

        const particleTexture = new THREE.CanvasTexture(particleCanvas);

        const material = new THREE.PointsMaterial({
            size: 5,
            vertexColors: true,
            map: particleTexture,
            transparent: true,
            opacity: 0.65,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Add Floating Geometric Wireframe Polyhedron
        const geoMesh = new THREE.IcosahedronGeometry(75, 1);
        const geoMat = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            wireframe: true,
            transparent: true,
            opacity: 0.08
        });
        const icosahedron = new THREE.Mesh(geoMesh, geoMat);
        icosahedron.position.set(280, 50, -50);
        scene.add(icosahedron);

        // Responsive Resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Mouse Parallax
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
        });

        // Animation Loop
        let animationFrameId;
        function animate() {
            animationFrameId = requestAnimationFrame(animate);

            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            particles.rotation.y += 0.0006;
            particles.rotation.x = targetY * 0.001;
            particles.rotation.y += targetX * 0.001;

            icosahedron.rotation.x += 0.003;
            icosahedron.rotation.y += 0.004;

            renderer.render(scene, camera);
        }

        animate();

        // Pause animation when tab is inactive to preserve battery
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                animate();
            }
        });
    }

    // ==========================================
    // 5. CUSTOM CYBER CURSOR
    // ==========================================
    function initCustomCursor() {
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        if (!dot || !ring) return;

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });

        function renderRing() {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            requestAnimationFrame(renderRing);
        }
        renderRing();

        // Hover Effect on Interactive Elements
        const interactiveTargets = document.querySelectorAll('a, button, input, textarea, .tilt-card, .skill-tab, .project-filter-btn');
        interactiveTargets.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
                playSound('hover');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }

    // ==========================================
    // 6. 3D CARD TILT & SPECULAR GLARE
    // ==========================================
    function init3DTiltCards() {
        const tiltCards = document.querySelectorAll('.tilt-card');

        tiltCards.forEach((card) => {
            const maxTilt = parseFloat(card.dataset.tiltMax) || 8;

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const cardWidth = rect.width;
                const cardHeight = rect.height;
                const cardX = e.clientX - rect.left;
                const cardY = e.clientY - rect.top;

                const rotateY = ((cardX / cardWidth) - 0.5) * (maxTilt * 2);
                const rotateX = -((cardY / cardHeight) - 0.5) * (maxTilt * 2);

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)';
            });

            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none';
            });
        });
    }

    // ==========================================
    // 7. HERO TYPING ROTATION
    // ==========================================
    function initHeroTyping() {
        const target = document.getElementById('hero-typing-target');
        if (!target) return;

        const roles = [
            "Software Engineer & Systems Architect",
            "Distributed Systems & Cloud Specialist",
            "Low-Latency Event Streaming Architect",
            "Full-Stack Polyglot & Systems Optimizer"
        ];

        let roleIndex = 0;
        let charIndex = roles[0].length;
        let isDeleting = false;
        let typingDelay = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                target.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 40;
            } else {
                target.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 80;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                typingDelay = 2200; // Pause at completion
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingDelay = 400; // Pause before typing new text
            }

            setTimeout(type, typingDelay);
        }

        setTimeout(type, 2000);
    }

    // ==========================================
    // 8. DEVELOPER CODE RUNNER & AVATAR REVEAL (RUN & BACK TOGGLE)
    // ==========================================
    function initCodeRunner() {
        const runBtn = document.getElementById('run-profile-btn');
        const outputPlaceholder = document.getElementById('output-placeholder');
        const outputAvatarCard = document.getElementById('output-avatar-card');

        if (!runBtn || !outputPlaceholder || !outputAvatarCard) return;

        runBtn.addEventListener('click', () => {
            const isBackMode = runBtn.classList.contains('is-back');

            if (isBackMode) {
                // Return to code view / output placeholder
                playSound('click');
                outputAvatarCard.style.display = 'none';
                outputPlaceholder.style.display = 'block';

                runBtn.classList.remove('is-back');
                runBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span class="btn-run-label">Run Code</span>';
            } else {
                // Run code compilation and reveal avatar
                playSound('click');
                runBtn.classList.add('running');
                runBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Compiling &amp; Executing...</span>';

                setTimeout(() => {
                    outputPlaceholder.style.display = 'none';
                    outputAvatarCard.style.display = 'flex';
                    playSound('success');
                    showToast('Developer Profile Compiled & Avatar Verified!', 'success');

                    runBtn.classList.remove('running');
                    runBtn.classList.add('is-back');
                    runBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> <span class="btn-run-label">Back</span>';
                }, 500);
            }
        });
    }

    // ==========================================
    // 8.1. CODE SNIPPET COPY TO CLIPBOARD
    // ==========================================
    function initCopyCode() {
        const copyBtn = document.getElementById('copy-ide-code-btn');
        const codeBlock = document.getElementById('ide-code-content');

        if (!copyBtn || !codeBlock) return;

        copyBtn.addEventListener('click', () => {
            const codeText = codeBlock.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                playSound('success');
                showToast('Code Snippet Copied to Clipboard!', 'success');
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span class="copy-label">Copied!</span>';

                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = '<i class="fa-regular fa-clone"></i> <span class="copy-label">Copy Code</span>';
                }, 2200);
            }).catch(() => {
                showToast('Unable to copy code automatically', 'info');
            });
        });
    }

    // ==========================================
    // 9. SKILLS & PROJECTS FILTERING
    // ==========================================
    function initFilters() {
        // Skills Tabs
        const skillTabs = document.querySelectorAll('.skill-tab');
        const skillCards = document.querySelectorAll('.skill-card');

        skillTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                playSound('click');
                skillTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const category = tab.dataset.category;

                skillCards.forEach((card) => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Project Filters
        const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        projectFilterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                playSound('click');
                projectFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                projectCards.forEach((card) => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ==========================================
    // 10. PROJECT DEEP-DIVE MODAL SYSTEM
    // ==========================================
    function initProjectModal() {
        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('project-modal-content');
        const closeBtn = document.getElementById('modal-close-btn');
        const terminalTitle = document.getElementById('modal-terminal-title');

        if (!modal || !modalContent) return;

        function openModal(projectId) {
            const data = projectsData[projectId];
            if (!data) return;

            playSound('open');
            terminalTitle.textContent = `${projectId}_architecture_spec.json`;

            let specsHtml = '';
            for (const [key, val] of Object.entries(data.specs)) {
                specsHtml += `
                    <div class="modal-spec-card">
                        <div class="spec-title">${key}</div>
                        <div class="spec-val">${val}</div>
                    </div>
                `;
            }

            modalContent.innerHTML = `
                <img src="${data.image}" alt="${data.title}" class="modal-hero-image">
                <span class="project-category-badge">${data.category}</span>
                <h2 class="modal-title">${data.title}</h2>
                <div class="modal-subtitle">// STATUS: ${data.status}</div>

                <div class="modal-specs-grid">
                    ${specsHtml}
                </div>

                <h4 class="modal-section-title">// SYSTEM OVERVIEW</h4>
                <p class="paragraph">${data.overview}</p>

                <h4 class="modal-section-title">// ARCHITECTURAL MECHANICS</h4>
                <p class="paragraph">${data.architecture}</p>

                <h4 class="modal-section-title">// SOURCE CODE SPECIMEN</h4>
                <pre class="modal-code-block"><code>${escapeCode(data.codeSnippet)}</code></pre>

                <div class="modal-actions">
                    <a href="${data.liveUrl}" class="btn btn-primary-cyan btn-sm">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Telemetry Demo
                    </a>
                    <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-glass-panel btn-sm">
                        <i class="fa-brands fa-github"></i> Repository Source
                    </a>
                </div>
            `;

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            playSound('click');
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        function escapeCode(code) {
            return code.replace(/[&<>"']/g, (m) => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            })[m]);
        }

        // Attach Click Listeners
        document.querySelectorAll('.project-modal-trigger').forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const pid = trigger.dataset.project;
                openModal(pid);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Click Backdrop to Close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // ESC Key to Close
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // ==========================================
    // 11. SFX AUDIO TOGGLE & STORAGE
    // ==========================================
    function initSFXToggle() {
        const toggleBtn = document.getElementById('sfx-toggle');
        const icon = document.getElementById('sfx-icon');
        const label = toggleBtn ? toggleBtn.querySelector('.sfx-label') : null;

        if (!toggleBtn) return;

        // Load Persisted Preference
        const savedSFX = localStorage.getItem('rohan_portfolio_sfx');
        if (savedSFX === 'true') {
            state.sfxEnabled = true;
            toggleBtn.classList.add('sfx-on');
            if (icon) {
                icon.className = 'fa-solid fa-volume-high text-cyan';
            }
            if (label) label.textContent = 'SFX: ON';
        }

        toggleBtn.addEventListener('click', () => {
            state.sfxEnabled = !state.sfxEnabled;
            localStorage.setItem('rohan_portfolio_sfx', state.sfxEnabled);

            if (state.sfxEnabled) {
                toggleBtn.classList.add('sfx-on');
                if (icon) icon.className = 'fa-solid fa-volume-high text-cyan';
                if (label) label.textContent = 'SFX: ON';
                initAudio();
                playSound('success');
                showToast('Cyber SFX Audio Activated', 'info');
            } else {
                toggleBtn.classList.remove('sfx-on');
                if (icon) icon.className = 'fa-solid fa-volume-xmark';
                if (label) label.textContent = 'SFX: OFF';
                showToast('Audio SFX Muted', 'info');
            }
        });
    }

    // ==========================================
    // 12. COPY EMAIL TO CLIPBOARD
    // ==========================================
    function initCopyEmail() {
        const copyBtn = document.getElementById('copy-email-btn');
        const emailEl = document.getElementById('email-address');

        if (!copyBtn || !emailEl) return;

        copyBtn.addEventListener('click', () => {
            const email = emailEl.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                showToast('Email Copied to Clipboard: ' + email, 'success');
                const copyText = copyBtn.querySelector('.copy-text');
                if (copyText) {
                    copyText.textContent = 'Copied!';
                    setTimeout(() => {
                        copyText.textContent = 'Copy';
                    }, 2000);
                }
            }).catch(() => {
                showToast('Direct contact: ' + email, 'info');
            });
        });
    }

    // ==========================================
    // 13. CONTACT FORM TRANSMISSION
    // ==========================================
    function initContactForm() {
        const form = document.getElementById('contact-form');
        const statusFeed = document.getElementById('form-status-feed');
        const submitBtn = document.getElementById('submit-transmission-btn');

        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            playSound('click');

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !email || !message) {
                statusFeed.className = 'form-status-feed error';
                statusFeed.textContent = 'ERR_EMPTY_FIELDS: Please fill in all required transmission parameters.';
                return;
            }

            // Interactive Telemetry Feedback
            submitBtn.disabled = true;
            statusFeed.className = 'form-status-feed';
            statusFeed.innerHTML = '<span class="text-cyan">// INITIATING TLS 1.3 HANDSHAKE &amp; ENCRYPTING PAYLOAD...</span>';

            setTimeout(() => {
                statusFeed.innerHTML = '<span class="text-cyan">// DISPATCHING PACKETS TO ROHAN SECURE GATEWAY...</span>';
            }, 600);

            setTimeout(() => {
                statusFeed.className = 'form-status-feed success';
                statusFeed.innerHTML = `
                    <i class="fa-solid fa-check-circle"></i> TRANSMISSION CONFIRMED [ACK 200 OK]. Thank you, ${escapeHtml(name)}. I will respond to &lt;${escapeHtml(email)}&gt; shortly.
                `;
                showToast('Message Transmitted Successfully!', 'success');
                submitBtn.disabled = false;
                form.reset();
            }, 1400);
        });

        function escapeHtml(str) {
            return str.replace(/[&<>"']/g, (m) => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            })[m]);
        }
    }

    // ==========================================
    // 14. VERTICAL NAVBAR & NAVIGATION
    // ==========================================
    function initNavigation() {
        const header = document.getElementById('header');
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileDrawer = document.getElementById('mobile-drawer');
        const drawerClose = document.getElementById('drawer-close');
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        const vnavLinks = document.querySelectorAll('.vnav-link');

        // Scroll Spy for Vertical Navbar & Header
        function updateActiveNav() {
            const scrollY = window.scrollY;

            if (scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Check if user is near top
            if (scrollY < 180) {
                setActiveNavLink('hero');
                return;
            }

            // Check if user reached bottom of page
            if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 70)) {
                setActiveNavLink('contact');
                return;
            }

            const scrollPos = scrollY + (window.innerHeight * 0.35);
            const sections = document.querySelectorAll('section[id]');
            let currentSectionId = 'hero';

            sections.forEach((sec) => {
                const top = sec.offsetTop;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (scrollPos >= top && scrollPos < top + height) {
                    currentSectionId = id;
                }
            });

            // Map aliases and intermediate sections so an icon is always gracefully active
            if (currentSectionId === 'experience') currentSectionId = 'timeline';
            if (currentSectionId === 'education' || currentSectionId === 'achievements') currentSectionId = 'projects';

            setActiveNavLink(currentSectionId);
        }

        function setActiveNavLink(sectionId) {
            vnavLinks.forEach((link) => {
                const target = link.dataset.section;
                if (target === sectionId || (target === 'hero' && (sectionId === 'home' || sectionId === 'hero'))) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav, { passive: true });
        updateActiveNav();

        // Audio & Click Handlers for Vertical Nav Links
        vnavLinks.forEach((link) => {
            link.addEventListener('click', () => {
                playSound('click');
            });
            link.addEventListener('mouseenter', () => {
                playSound('hover');
            });
        });

        // Mobile Menu Drawer
        function toggleDrawer(open) {
            if (open) {
                playSound('open');
                mobileDrawer.classList.add('open');
                mobileDrawer.setAttribute('aria-hidden', 'false');
                mobileToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                playSound('click');
                mobileDrawer.classList.remove('open');
                mobileDrawer.setAttribute('aria-hidden', 'true');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                const isOpen = mobileDrawer.classList.contains('open');
                toggleDrawer(!isOpen);
            });
        }

        if (drawerClose) {
            drawerClose.addEventListener('click', () => toggleDrawer(false));
        }

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => toggleDrawer(false));
        });
    }

    // ==========================================
    // 15. AI CHAT ASSISTANT CONCIERGE
    // ==========================================
    function initChatAssistant() {
        const chatForm = document.getElementById('chat-input-form');
        const chatInput = document.getElementById('chat-user-input');
        const stream = document.getElementById('chat-messages-stream');
        const chips = document.querySelectorAll('.chat-chip');

        if (!chatForm || !stream) return;

        const answers = {
            developer: "Rohan is a passionate **developer**, who is also a **software engineer** and a **Computer Science & Engineering student at VTU (GPA: 9.87)** from Chikkamagaluru, Karnataka. He specializes in designing scalable backend systems, cloud services on AWS, embedded IoT telemetry, and cyber threat verification algorithms.",
            experience: "Rohan's engineering experience spans: 1. **Software Engineering Intern at Google** (Cloud Systems & Engineering Infrastructure, Python/Java/gRPC). 2. **Software Development Engineer Intern (SDE Intern) at Amazon** (Distributed Services, AWS Lambda, DynamoDB, S3). 3. **Competitive Hackathons & Innovation Lead** (Bangalore Hackathon 2025 Qualifier, Collegiate 2nd Prize Winner).",
            achievements: "Rohan's key honors and achievements include: 1. **Bangalore Hackathon 2025**: Qualified and competed among elite tech teams in India's top tech capital. 2. **2nd Prize in College-Level Engineering Hackathon** for real-time reactive software engineering. 3. **Internship Appreciation at Tap Academy** for exemplary Java full-stack & DSA problem-solving performance.",
            education: "Rohan's academic foundation is strictly organized across three milestones: 1. **Bachelor of Engineering in Computer Science & Engineering (2025–2029)** under **VTU University** with a stellar **9.87 GPA**. 2. **12th Standard Science (PCMB) (2025)** at **Tungal Science College, Jamkhandi (JKD)** with **8.55 GPA**. 3. **10th Standard (2022)** at **Sai Sankalp School, Mudhol (MDK)** with **9.94 GPA**.",
            skills: "Rohan's core technical toolkit comprises **Java**, **Python**, **JavaScript**, **CSS / CSS3**, **AWS Cloud Platform**, and foundational mastery of **Data Structures & Algorithms (DSA)**.",
            projects: "Rohan's featured engineering systems: 1. **IoT Based Smart Dustbin System** (Automated ultrasonic monitoring sending smartphone alert when 80% full). 2. **Fraud Email Detector & Virus Debugger** (AI/NLP message analyzer and payload sandbox debugger). 3. **Phishing URL Scanner & Authenticator** (Zero-trust URL verification engine checking SSL, DNS, and homographs).",
            contact: "You can reach Rohan directly via his primary email **rohankumbarhall@gmail.com** (based in Chikkamagaluru, Karnataka) and verified links: **GitHub** (GitHub.com/rohankumbarhall), **X** (x.com/kumbarhall90204), **LinkedIn** (linkedin.com/in/rohan-basavaraj-kumbarahalla), and **Instagram** (@rohan_b_g).",
            default: "Rohan is a developer as well as a software engineer and Computer Science & Engineering student at VTU (9.87 GPA) based in Chikkamagaluru, Karnataka. Ask about his Google & Amazon internships, Bangalore Hackathon 2025, Tap Academy honors, projects, or direct email!"
        };

        function getSmartAnswer(query) {
            const q = query.toLowerCase();
            if (q.includes('intern') || q.includes('google') || q.includes('amazon') || q.includes('experience') || q.includes('role') || q.includes('work') || q.includes('timeline')) {
                return answers.experience;
            }
            if (q.includes('hackathon') || q.includes('prize') || q.includes('award') || q.includes('achievement') || q.includes('honor') || q.includes('tap academy') || q.includes('bangalore')) {
                return answers.achievements;
            }
            if (q.includes('who is') || q.includes('about') || q.includes('developer') || q.includes('engineer') || q.includes('rohan')) {
                return answers.developer;
            }
            if (q.includes('edu') || q.includes('gpa') || q.includes('vtu') || q.includes('college') || q.includes('school') || q.includes('tungal') || q.includes('sankalp') || q.includes('degree') || q.includes('pcmb')) {
                return answers.education;
            }
            if (q.includes('stack') || q.includes('language') || q.includes('tech') || q.includes('skill') || q.includes('java') || q.includes('python') || q.includes('aws') || q.includes('dsa')) {
                return answers.skills;
            }
            if (q.includes('project') || q.includes('dustbin') || q.includes('iot') || q.includes('fraud') || q.includes('email') || q.includes('phishing') || q.includes('url')) {
                return answers.projects;
            }
            if (q.includes('contact') || q.includes('github') || q.includes('linkedin') || q.includes('instagram') || q.includes('twitter') || q.includes('x.com') || q.includes('mail') || q.includes('email') || q.includes('chikkamagaluru')) {
                return answers.contact;
            }
            return answers.default;
        }

        function appendMessage(sender, text) {
            const msgEl = document.createElement('div');
            msgEl.className = `chat-message ${sender === 'user' ? 'user-msg' : 'assistant-msg'}`;

            const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const avatar = sender === 'user' 
                ? '<i class="fa-solid fa-user"></i>' 
                : '<i class="fa-solid fa-robot"></i>';
            const author = sender === 'user' ? 'You' : 'Rohan AI Concierge';

            // Simple markdown-style bold formatter
            const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan">$1</strong>');

            msgEl.innerHTML = `
                <div class="msg-avatar">${avatar}</div>
                <div class="msg-content">
                    <div class="msg-header">
                        <span class="msg-author">${author}</span>
                        <span class="msg-time">${now}</span>
                    </div>
                    <p class="msg-text">${formattedText}</p>
                </div>
            `;

            stream.appendChild(msgEl);
            stream.scrollTop = stream.scrollHeight;
        }

        function handleQuestion(question) {
            if (!question.trim()) return;
            appendMessage('user', question);
            playSound('click');

            // Show typing indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'chat-message assistant-msg typing-msg';
            typingIndicator.innerHTML = `
                <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
                <div class="msg-content">
                    <span class="mono-code text-cyan"><i class="fa-solid fa-spinner fa-spin"></i> Synthesizing telemetry response...</span>
                </div>
            `;
            stream.appendChild(typingIndicator);
            stream.scrollTop = stream.scrollHeight;

            setTimeout(() => {
                typingIndicator.remove();
                const reply = getSmartAnswer(question);
                appendMessage('assistant', reply);
                playSound('success');
            }, 500);
        }

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = chatInput.value.trim();
            if (val) {
                handleQuestion(val);
                chatInput.value = '';
            }
        });

        chips.forEach((chip) => {
            chip.addEventListener('click', () => {
                const prompt = chip.dataset.prompt;
                handleQuestion(prompt);
            });
        });
    }

    // ==========================================
    // 16. LIVE RUNTIME TELEMETRY & CLOCK (IST - NEW DELHI)
    // ==========================================
    function initTelemetryClock() {
        const clockEl = document.getElementById('live-time-display');
        const yearEl = document.getElementById('current-year');

        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        function updateClock() {
            if (!clockEl) return;
            const now = new Date();
            // Format to Indian Standard Time (IST)
            const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const istTime = new Intl.DateTimeFormat('en-GB', options).format(now);
            clockEl.textContent = `${istTime} IST (New Delhi)`;
        }

        updateClock();
        setInterval(updateClock, 1000);
    }

    // ==========================================
    // INITIALIZATION ON DOM CONTENT LOADED
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        initThreeCanvas();
        initCustomCursor();
        init3DTiltCards();
        initHeroTyping();
        initCodeRunner();
        initCopyCode();
        initFilters();
        initProjectModal();
        initSFXToggle();
        initCopyEmail();
        initContactForm();
        initNavigation();
        initChatAssistant();
        initTelemetryClock();
    });

})();
