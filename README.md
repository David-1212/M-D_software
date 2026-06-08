Goal
Build a fully functional, beautiful, SEO-optimized corporate website for M&D Desarrollo Web (web development company founded by Mathier Mendoza Morelos and David Guadalupe Vargas López).
Constraints & Preferences
Dark background with cyan/blue animated particle canvas (restored after a white-background experiment)
White background attempt was reverted; dark theme is the final choice
All "Cotizar" and "Solicitar cotización" buttons must open WhatsApp directly (not scroll to #cta)
Floating WhatsApp button always visible in bottom-right corner with pulse animation and tooltip
M&D logo in the top-left nav must be clickable and link to the top of the page (href="#")
Favicon must be an actual SVG file (favicon.svg), not a data URI, because data URIs don't load reliably
Tech stack for both founders must be updated to the same list: Docker, Kubernetes, AWS, Linux, Nginx, Laravel, Stripe, Node.js, Python, PostgreSQL, MySQL, MariaDB
TypeScript was removed from the tech carousel and replaced with the list above
Technologies divided by role: Mathier (infra/servers): Docker, Kubernetes, AWS, Linux, Nginx, PostgreSQL, MySQL, MariaDB — David (software): Laravel, Stripe, Node.js, Python, Docker, PostgreSQL, MySQL, MariaDB
All external links must have rel="noopener noreferrer"
All source code split into separate files: index.html, style.css, script.js
Spanish language for Mexico (es-MX)
Progress
Done
Created full responsive website with dark theme and cyan/blue animated particle canvas background
Added glow orbs with drift animation for depth
Added typing effect in hero (cycles through "Desarrollo web a medida", "Despliegue en la nube", "SEO que posiciona", "Arquitectura escalable", "Soporte continuo")
Added animated counters (50+ projects, 30+ clients, 5+ years, 98% uptime) that trigger on scroll via IntersectionObserver
Added timeline process (4 steps: Descubrimiento → Arquitectura & Diseño → Desarrollo & CI/CD → Despliegue & Growth)
Added features/benefits grid (4 cards)
Added tech carousel with infinite scroll (pauses on hover)
Added team section with both founders, actual bios, skills, and social links
Added FAQ section with accordion and JSON-LD FAQPage schema
Added SEO suite: meta title/description/keywords, canonical, hreflang, Dublin Core, geo tags, Open Graph, Twitter Cards, robots.txt, sitemap.xml
Added JSON-LD structured data: Organization, WebSite, BreadcrumbList, FAQPage
Added preloader/loader animation (M&D logo pulse + progress bar)
Added favicon.svg (inline SVG with M&D logo on dark background)
Removed CUCEI/CTA mentions from team bios
Removed Testimonials section
Removed TypeScript from tech stack
David's GitHub linked to https://github.com/David-1212
Split code into index.html, style.css, script.js
All external WhatsApp and GitHub links have rel="noopener noreferrer"
In Progress
(none)
Blocked
(none)
Key Decisions
Dark theme (#06060e) with cyan accent (#00e5ff) was chosen as the final design direction after testing white background — user explicitly requested "el fondo azul con animacion que tenia al principio" (the blue animated background from the beginning)
Data URI favicon didn't load reliably → switched to a real favicon.svg file on disk
href="#hero" on the logo didn't feel like scrolling to top → changed to href="#" for a more natural "back to top" behavior
Contact form was replaced entirely by WhatsApp-only CTA because the user said "reemplazalo por un mensaje de wp" (replace it with a WhatsApp message)
TypeScript removed per user request; replaced with Docker, Kubernetes, AWS, Linux, Nginx, Laravel, Stripe, Node.js, Python, PostgreSQL, MySQL, MariaDB
Next Steps
(none — user asked "con eso hay?" — the page appears to be in a completed state pending user feedback)
Possible future additions if requested: Google Analytics, blog/articles for organic traffic, 404 page, service worker/PWA, project portfolio with real screenshots, contact form with email backend, Google Search Console verification meta tag, Open Graph image (1200×630px) with real logo
Critical Context
WhatsApp number used: 584241234567 (placeholder — must be changed to the real number before going live)
Domain: https://mdsoftware.com/ (placeholder — must be changed to the real domain before going live)
The JSON-LD structured data and canonical URLs reference https://mdsoftware.com/ — update this if the real domain is different
The page is being served from C:\Users\sav\Desktop\mdsoftware.com\ — a local desktop folder, not a live server
GitHub profile for David: https://github.com/David-1212
GitHub profile for Mathier: https://github.com/DeadZombie14
