# Edwin Ruto — Cloud & DevOps Portfolio

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AWS Certified](https://img.shields.io/badge/AWS-Certified_Solutions_Architect-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive portfolio and case-study showcase for **Edwin Ruto**, an AWS Certified Solutions Architect and Instructor. Built with React 19, Tailwind CSS v4, Vite, Lucide Icons, and EmailJS.

---

## Key Highlights

- **Interactive Architecture Case Studies:** In-depth technical breakdowns of AWS Infrastructure as Code (Terraform), resilient multi-AZ web servers, Docker containerization, and VPC networking.
- **Automated Data Sync (GitHub Actions):** A scheduled GitHub Action runs every 12 hours to fetch Edwin's latest Medium articles and GitHub repositories, automatically keeping the portfolio fresh without manual code commits.
- **Tailwind CSS v4 Theme:** Designed with a high-contrast Navy and Gold color palette (`navy-dark`, `navy-primary`, `gold-accent`) that complies with WCAG readability guidelines.
- **Live GitHub Repository Showcase:** Displays active public repositories with real-time star and fork metrics alongside custom cloud case studies.
- **Direct Contact & Telephony Integration:** EmailJS contact form with real-time feedback notifications (`react-hot-toast`), paired with one-tap calling (`tel:`) and native email dispatch (`mailto:`).
- **Credly & Medium Integration:** Verified Credly badge links for all AWS certifications and live previews for technical Medium publications.

---

##  Tech Stack

- **Framework:** React 19
- **Bundler:** Vite 7
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Messaging:** EmailJS Browser SDK
- **Automation:** GitHub Actions (scheduled cron sync)
- **Feedback & Notifications:** React Hot Toast
- **CI/CD & Automation:** GitHub Actions (scheduled cron sync) & Vercel

---

## 📂 Project Structure

```text
edwinPortfolio/
├── .github/
│   └── workflows/
│       └── sync-portfolio.yml   # 12-hour cron job syncing Medium & GitHub
├── scripts/
│   └── sync-data.js             # Node.js sync script for Medium RSS and GitHub API
├── public/                      # Static assets & illustrations
├── public/                      # Static assets, certifications & illustrations
├── src/
│   ├── assets/                  # Icons and local images
│   ├── assets/                  # Local icons and media assets
│   ├── components/
│   │   ├── AboutMeSection.jsx   # Bio and instructor credentials
│   │   ├── BlogSection.jsx      # Medium articles showcase
│   │   ├── CaseStudyPage.jsx    # Standalone, deep technical case study view
│   │   ├── BlogSection.jsx      # Medium articles showcase (auto-synced)
│   │   ├── CaseStudyPage.jsx    # Full-page architecture breakdown with breadcrumbs
│   │   ├── CertificatiosnSection.jsx # Credly verified badges
│   │   ├── ContactSection.jsx   # Contact form & socials
│   │   ├── ContactSection.jsx   # Contact form with EmailJS, tel: and mailto: links
│   │   ├── FooterSection.jsx    # Footer credits and navigation
│   │   ├── HeroSection.jsx      # Hero landing with AWS certification highlight
│   │   ├── NavSection.jsx       # Responsive header with scroll spy
│   │   ├── ProjectsSection.jsx  # Selected projects, diagrams, and pipeline visuals
│   │   ├── NavSection.jsx       # Responsive header with scroll spy navigation
│   │   ├── ProjectsSection.jsx  # Selected projects, diagrams, pipelines & repo feed
│   │   └── ServicesSection.jsx  # Cloud consulting & exam prep offerings
│   ├── data/
│   │   ├── blogsData.json       # Auto-synced Medium articles
│   │   ├── githubRepos.json     # Auto-synced GitHub repositories
│   │   └── projectsData.js      # Structured project metadata and case studies
│   │   └── projectsData.js      # Structured project metadata, pipelines & case studies
│   ├── App.jsx                  # Main routing & state controller
│   ├── main.jsx                 # React root entry
│   └── index.css                # Tailwind v4 theme definitions
├── package.json
└── vite.config.js
```

---

##  Content Automation

The portfolio maintains an automated pipeline defined in `.github/workflows/sync-portfolio.yml`:
* **Medium Posts:** Periodically pulls latest publications from Medium via RSS.
* **GitHub Repos:** Periodically pulls latest public repositories via the GitHub API.
* **Zero Noise:** The workflow only commits if actual new content is published.
* **Zero Noise:** The workflow only commits if actual new content is published (`[skip ci]`).

---

Designed and developed for Edwin Ruto. All rights reserved.
