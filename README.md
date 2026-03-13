# Luke Thisara Jayasundara — Portfolio

A glassmorphism-style Next.js portfolio with animated particles, live GitHub API integration, and dark/light mode toggle.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, OG tags
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # CSS variables, glassmorphism, animations
├── components/
│   ├── ParticleBackground.tsx  # Animated canvas particles
│   ├── Navbar.tsx              # Sticky nav + dark mode toggle
│   ├── Hero.tsx                # Typewriter + stats + CTA
│   ├── About.tsx               # Profile, timeline, social links
│   ├── Skills.tsx              # Categorised skill bars
│   ├── Projects.tsx            # GitHub API + featured projects
│   ├── Contact.tsx             # Formspree form + socials
│   └── Footer.tsx              # Footer with links
└── public/
    └── og-image.png            # ← CREATE THIS (1200×630px)
```

## ⚙️ Setup Steps

### 1. Set up the contact form (Formspree)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the form ID (looks like `xabc1234`)
3. Open `components/Contact.tsx`
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```
   https://formspree.io/f/xabc1234
   ```

### 2. Create your OG image
Create a `public/og-image.png` file (1200×630px) with:
- Your name: **Luke Thisara Jayasundara**
- Title: **Full-Stack Engineer | ERP Consultant**
- A dark background with your accent colors

Use Canva (free): https://canva.com → "Custom Size" → 1200x630

### 3. Add your GitHub repos
Your GitHub username `thisara97` is already set. The Projects section
auto-fetches your public repos. To pin specific repos, update the
`featuredProjects` array in `components/Projects.tsx`.

## 🌐 Deploy to Vercel (Free)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/thisara97/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Click **Deploy** — done! You get `luke-thisara-portfolio.vercel.app`

## 🔗 Custom Domain (Optional)
Buy `lukethisara.dev` (~$12/yr) on Namecheap, then:
- Vercel Dashboard → Your Project → Settings → Domains → Add Domain

## 📱 LinkedIn Sharing
After deploy, your portfolio will show a rich preview card on LinkedIn
once you add `public/og-image.png`. Test it at:
https://www.linkedin.com/post-inspector/

## 🎨 Customisation

| What | Where |
|------|-------|
| Colors / theme | `app/globals.css` → CSS variables |
| Your info | Each component directly |
| Projects | `components/Projects.tsx` → `featuredProjects` |
| Skills & levels | `components/Skills.tsx` → `categories` |
| Particle density | `components/ParticleBackground.tsx` → `count` formula |

## Tech Stack
- **Next.js 15** — App Router, SSR
- **TypeScript** — Full type safety
- **Tailwind CSS v4** — Utility styling
- **CSS Variables** — Glassmorphism theming
- **Canvas API** — Particle animation
- **GitHub REST API** — Live repo data
- **Formspree** — Contact form (no backend needed)
