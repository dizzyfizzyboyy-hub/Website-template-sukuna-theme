# w-sukuna

A black & red portfolio template that runs on plain HTML, CSS, and a dash of vanilla JS. No build step, no framework, no account needed — open it, edit the text, swap the images, and you're live.

Built to be *customised by hand, in the browser of your choice*. Every piece of text in the page is marked with an `<!-- EDIT -->` comment sitting right above it.

---

## What's inside

```
w-sukuna/
├── index.html          ← all your text, images, links — edit here
├── style.css           ← colors, fonts, sizes (see :root at the top)
├── script.js           ← tiny interactions (menu, scroll reveal). probably won't touch this
├── font-faces.css      ← self-hosted fonts
├── fonts/              ← the font files, offline-friendly
├── assets/images/      ← photo + project placeholders, swap your own files in
├── README.md
└── LICENSE
```

## Quick start

1. **Open the site** — double-click `index.html`. It works straight from a folder, no server needed.
2. **Edit the text** — open `index.html` in any editor (VS Code, Notepad++, or just Notepad). Scroll until you see `<!-- EDIT ... -->` and change whatever sits right below it: your name, role, about section, projects, contact email.
3. **Add / remove stuff** — comments tell you exactly what to copy. To add a project, copy one whole `<article>` block in the Work section and paste it after the last one.
4. **Swap the images** — everything references `assets/images/`. Two ways:
   - *Easiest:* replace the placeholder file, keep the same filename. Nothing else to change.
   - *Or:* rename your file, then update the name inside the matching `<img src="...">`.

## Images

| Placeholder file | What it's for |
| --- | --- |
| `assets/images/photo.svg` | your portrait (hero, ~600 × 750) |
| `assets/images/project-1.svg` … `project-6.svg` | project thumbnails (~800 × 500) |

Pictures in other formats work fine too — drop in a `.jpg`/`.png`/`.webp` and point the `<img>` tag at it.

## Themes & fonts

All colors live at the top of `style.css` inside `:root` — the red accent is `--red`, the background is `--bg`. Change one value and the whole site follows.

Fonts (Syne, Manrope, JetBrains Mono) are self-hosted in `fonts/`, so the site works offline. Swap files in there if you want different typography — remember to update `font-faces.css` family names.

## Publishing (GitHub Pages — free)

1. Push this folder to a repo on GitHub.
2. Repo → **Settings** → **Pages**.
3. Under *Build and deployment*, set **Source** to *Deploy from a branch*, pick `main` (or `master`) and root `/`.
4. Save. Your site is live at `https://<username>.github.io/<repo-name>/` in a minute or two.

## License

MIT — free to use, remix, and sell. The copyright line in `LICENSE` is set to a placeholder ("Your Name"); put your own name there if you share it.

---

## Bahasa Indonesia

Template portofolio tema hitam-merah, cuma HTML/CSS/JS biasa — nggak perlu install apa-apa.

- **Ganti teks:** buka `index.html`, cari `<!-- EDIT ... -->`, ganti yang ada di bawahnya.
- **Ganti gambar:** letakkan foto/proyek kamu di `assets/images/` dengan nama file yang sama (contoh `photo.svg`), atau ganti nama di tag `<img>`.
- **Nambah proyek:** salin satu blok `<article>` di bagian Work, tempel di bawah yang terakhir.
- **Warna:** di atas `style.css`, bagian `:root` (variabel `--red`, `--bg`, dll).
- **Cara online gratis:** push ke GitHub → Settings → Pages → pilih `main` / root → selesai.