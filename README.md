# Seoyoung Oh — Personal Research & Portfolio Website

A problem-first, evidence-driven scientific portfolio website for **Seoyoung Oh**, PhD Candidate in Artificial Intelligence and Medical Image Analysis.

---

## 🚀 Quick Start & Development Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
This outputs the compiled static site files into the `dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Netlify Deployment Guide

The repository includes a root `netlify.toml` file configured for single-page client-side routing.

### Netlify Build Settings
* **Build Command**: `npm run build`
* **Publish Directory**: `dist`

### Netlify `netlify.toml` Configuration:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## ✏️ Content Management (`src/data/portfolio.ts`)

All editable website content, profile details, publications, case studies, and skills are stored in a single source of truth:

```
src/data/portfolio.ts
```

### 1. Editing Profile & Email
To update your name, tagline, email (`dkdlel9603@gmail.com`), location, or social links, edit `portfolioData.profile`:
```typescript
profile: {
  name: "Seoyoung Oh",
  tagline: "Medical AI · Scientific Problem Solving · Evidence Translation",
  email: "dkdlel9603@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/seoyoung-oh-medai",
    github: "https://github.com/seoyoung-oh",
    googleScholar: "https://scholar.google.com/citations?user=...",
  }
}
```

### 2. Showing or Hiding Content (`visible: boolean`)
Every publication and case study supports the `visible` property:
* Set `visible: true` to display the item publicly.
* Set `visible: false` to hide the item from public views without deleting data.

### 3. Adding or Updating a Publication
To add a new publication, add a new object to `portfolioData.publications`:
```typescript
{
  id: "pub-6",
  slug: "my-new-paper-slug",
  visible: true,
  title: "Title of Paper",
  authors: ["Seoyoung Oh", "Co-author Name"],
  venue: "IEEE ISBI 2027",
  year: 2027,
  status: "Accepted", // 'Published' | 'Accepted' | 'Under Review' | 'Manuscript'
  presentationType: "Oral", // 'Oral' | 'Poster' | 'Journal' | ''
  category: "Medical AI",
  problem: "One-sentence problem statement",
  contribution: "One-sentence contribution",
  whyItMatters: "Why the research matters",
  limitations: "Scope and interpretation boundaries",
  paperUrl: "https://arxiv.org/abs/...", // External paper link (or "" if none)
  localPaperPath: "/papers/my-paper.pdf", // Local PDF path (or "" if none)
  doiUrl: "https://doi.org/10....", // DOI link (or "" if none)
}
```
*Note: If `paperUrl`, `localPaperPath`, `doiUrl`, or `proceedingsUrl` is empty (`""`), the corresponding button hides automatically.*

### 4. Adding or Updating a Case Study
Add an entry to `portfolioData.caseStudies`:
```typescript
{
  id: "cs-5",
  slug: "my-case-study-slug",
  visible: true,
  title: "Case Study Title",
  openingQuestion: "What if ... ?",
  category: "Medical AI",
  status: "Published",
  shortSummary: "Short summary...",
  realProblem: "Real problem...",
  questionedAssumption: "Assumptions challenged...",
  reframing: "How the problem was reframed...",
  solution: ["Step 1", "Step 2"],
  evaluation: ["Evaluation 1"],
  representativeResults: ["Metric 1"],
  whyItMatters: "Why it matters...",
  limitations: "What it does NOT prove...",
  personalContribution: "Individual role...",
  publicationSlug: "my-new-paper-slug", // Links to publication detail
  image: "/images/project-image.webp",
  imageAlt: "Description of visual",
}
```

---

## 📁 Public Assets Structure

Place static images, PDFs, and CV files in the `public` directory:

```
public/
  images/
    profile-placeholder.svg
    project-reliable-normal-projection.svg
    project-weakly-supervised-localization.svg
    project-edge-computer-vision.svg
    project-brainstem-segmentation.svg
    og-image-placeholder.svg
  papers/
    reliable-normal-projection-eccv-2026.pdf
    multimap-fusion-isbi-2026.pdf
    brainstem-segmentation-isbi-2024.pdf
    rethnet-iccv-workshop-2019.pdf
    blockchain-real-estate-2017.pdf
  cv/
    Seoyoung_Oh_CV_2026.pdf
  favicon.svg
```

### Replacing Images & CV
* **Replace Project Image**: Save image into `public/images/your-image.webp` and set `image: "/images/your-image.webp"` in `portfolio.ts`.
* **Replace CV PDF**: Save your CV file into `public/cv/Seoyoung_Oh_CV_2026.pdf` (or update `profile.cvUrl` in `portfolio.ts`).

---

## 🔍 Troubleshooting Netlify Routing

If refreshing a detail page (e.g. `/work/reliable-normal-projection`) returns a 404 error on Netlify:
1. Ensure `netlify.toml` is present in the project root directory.
2. Confirm that `publish = "dist"` and the redirect rule `from = "/*"` to `to = "/index.html"` with `status = 200` is active.

---

## 📧 Contact Email Consistency

The primary contact email across all sections, mailto links, social buttons, footer, and SEO metadata is:

**`dkdlel9603@gmail.com`**
