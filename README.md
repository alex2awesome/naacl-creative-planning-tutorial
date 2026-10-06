# naacl-creative-planning-tutorial

Website and materials for the NAACL 2025 tutorial "Creative Planning with Language Models: Practice, Evaluation and Applications" (May 3, 2025), taught by Alexander Spangher (USC), Tenghao Huang (USC), Philippe Laban (Microsoft Research) and Nanyun (Violet) Peng (UCLA). The tutorial asks how language models can learn to plan in creative, human-centered domains such as journalism, scientific writing and storytelling, where rewards are unclear or sparsely observed. We organize the material around three aspects of creativity -- problem-finding (defining goals and rewards), path-finding (generating outputs that meet them) and evaluation (judging latent plans) -- and three data regimes (full, partial and low observation of the planning decisions). It closes with demos on menu design (Kristina Gligoric), LawFlow (Debarati Das) and STORM (Yucheng Jiang). The site is served through GitHub Pages at www.naacl-creative-planning-tutorial.net.

## Related paper

Tutorial abstract: "Creative Planning with Language Models: Practice, Evaluation and Applications", NAACL 2025 Tutorials. PDF in `assets/tutorial_overview.pdf`; LaTeX source in `assets/latex/`.

## Layout

- `index.html` -- the single-page site: instructors, abstract, schedule, cited materials (with expandable bibliographies per section) and links to materials.
- `static/css/basic.css`, `static/js/basic.js` -- styling and the expand/collapse behavior.
- `assets/tutorial_overview.pdf` -- tutorial abstract; `assets/tutorial_slides.pdf` -- slides (26 MB; also linked as Google Slides from the page).
- `assets/latex/` -- LaTeX source of the abstract (`acl_latex.tex`, bibliographies, TikZ diagram).
- `assets/images/` -- instructor photos and icons.
- `CNAME` -- custom domain for GitHub Pages.

## How to run

Open `index.html` in a browser, or serve locally with `python -m http.server` from the repo root. Pushing to the default branch updates the GitHub Pages site.

## Data

None. The repository is static content only.

## Status

`index.html` last updated November 2025; slides last updated May 2025.
