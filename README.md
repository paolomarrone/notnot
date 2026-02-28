# notnot

`notnot` is a minimal, open source, local-first note taking app built with Wails.

The project is markdown-file based and desktop-first. Notes live in a plain folder-based vault, with a compact UI designed for dense navigation and editing.

## Current Status

The current build includes:

- a real filesystem-backed test vault
- a file tree sidebar
- note tabs
- a single-pane edit/preview workflow
- a settings page
- light and dark themes

The app currently boots against the local [`test-vault/`](/home/lallero/projects/notnot/test-vault) directory during development.

## Development

Run the app in development mode:

```bash
wails dev
```

Build the frontend only:

```bash
cd frontend
npm run build
```

Build the desktop app:

```bash
wails build
```
