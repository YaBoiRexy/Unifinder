# UniFinder Canada (Static Website)

This project is a **fully static website** (just HTML/CSS/JS). That means:
- No backend server is required.
- You can host it for free with **GitHub Pages**.
- Files used: `index.html`, `styles.css`, `app.js`.

---

## 1) See it locally on your own computer (beginner-friendly)

### Option A: Double-click file (easiest)
1. Download the project ZIP from GitHub.
2. Unzip it.
3. Open `index.html` in your browser.

### Option B: Local server (recommended)
If you have Python installed:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

---

## 2) Host it for free with GitHub Pages

### Step-by-step
1. Create a GitHub account (if you do not have one): https://github.com
2. Create a new repository (for example: `unifinder`).
3. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
4. In your repo, go to **Settings**.
5. Click **Pages** in the left menu.
6. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/** (root)
7. Click **Save**.
8. Wait about 1–3 minutes.
9. GitHub will show your live URL (something like):
   - `https://YOUR-USERNAME.github.io/unifinder/`

Now your site is online.

---

## 3) Updating the site later

Any time you change and push files to the same branch (`main`), GitHub Pages will automatically redeploy the website.

---

## 4) Notes about the map

The map is embedded using a static Google Maps URL format (`maps.google.com ... output=embed`) so this project can stay simple and static for GitHub Pages.

---

## 5) Troubleshooting

- **Page is blank or old version**: hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`).
- **404 on GitHub Pages**: confirm `index.html` is in the repo root and Pages branch/folder are set correctly.
- **Site not updating**: check the repository **Actions** tab for deployment status.
