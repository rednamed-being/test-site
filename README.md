# Test Bank Demo

This repository contains a small static site to exercise a simple online-banking login flow for testing and demonstration. It is intended to be hosted on GitHub Pages.

Flow implemented:
1. Open the homepage and click `ONLINE BANKING LOGIN`.
2. On `Online Banking Login`, enter `jsmith` / `Demo1234` and click `Login`.
3. Successful login redirects to a page showing `Hello John Smith`.
4. Select `1001160140 Checking` and click `Go` to show account history.
5. Click `Sign Off` to log out.

Files:
- `index.html` — landing page
- `login.html` — login form
- `dashboard.html` — greeting, account selector, history, sign-off
- `styles.css` — basic styling
- `script.js` — client-side logic

Deploying to GitHub Pages (simple):

1. Create a new GitHub repository (e.g. `test-site`) and push these files to the `main` branch.

```bash
cd test-site
git init
git add .
git commit -m "Add test bank demo site"
# create repo on GitHub via web or use gh CLI
# Example using gh CLI:
# gh repo create <your-username>/test-site --public --source=. --remote=origin --push
git push -u origin main
```

2. In the repository on GitHub, go to Settings → Pages and set the source to the `main` branch (root). Save. The site will be available at `https://<your-username>.github.io/test-site/`.

Alternative quick publish using `gh`:

```bash
gh repo create <your-username>/test-site --public --source=. --remote=origin --push
gh pages enable --branch main --path /
```
