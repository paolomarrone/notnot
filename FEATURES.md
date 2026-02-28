## Core Product

- [x] Vaults: open a folder as the workspace, with all notes stored as plain .md files.
- [x] Single vault first: one active vault at a time.
- [x] Folder tree: browse folders and notes in a sidebar.
- [ ] Create/rename/move/delete notes and folders.
- [ ] Manual-save: save on change with manual save.
- [ ] Unsaved state indicator: show when a file is dirty.
- [x] home page
    - [x] Recent notes: quick access to last opened files.
    - [x] Pinned notes: keep frequently used notes accessible.
- [x] Tabs: open multiple notes at once.

## Editor

- [x] Markdown editor: plain text editing with markdown syntax.
- [x] single edit/view pane. No double pane
- [ ] Keyboard-first editing: common shortcuts for headings, bold, links, etc.
- [ ] Auto-pairing: brackets, quotes, backticks.
- [ ] Indentation helpers: list and blockquote continuation.
- [ ] Tables: basic markdown table editing.
- [x] Task lists: markdown checkboxes.

## Markdown Rendering

- [ ] GitHub-flavored markdown.
- [ ] Internal wiki links: [[Note Name]].
- [ ] Standard markdown links: [label](path.md).
- [ ] Embeds: transclude note content or images.
- [ ] Image rendering: local images from the vault.
- [ ] Audio/video embeds: optional.
- [ ] Blockquotes, callouts/admonitions.
- [ ] Footnotes.
- [ ] Heading anchors.

## Linking & Knowledge Features

- [ ] Backlinks: show which notes link to the current note.
- [ ] Unlinked mentions: detect note names in text that could become links.
- [ ] Outgoing links panel.
- [ ] Linked references preview: hover preview of linked notes.
- [ ] Block references: link to headings or blocks.
- [ ] Tag support: #tag parsing and browsing.
- [ ] Namespaces: folder-based structure plus tag-based structure.

## Organization

- [ ] Nested folders.
- [ ] Drag-and-drop file organization.
- [ ] Favorites: favorite folders, tags, notes.
- [ ] Tag pane.
- [ ] Sorting: by name, modified date, created date.
- [ ] Archive/trash: soft delete before permanent removal.

## Search

- [ ] Global full-text search.
- [ ] Search by title only.
- [ ] Search by tag.
- [ ] Search by path/folder.
- [ ] Search result snippets.
- [ ] Quick switcher: fuzzy open note by name.

## Graph / Logseq-like Features

- [ ] Local graph: links around the current note.
- [ ] Global graph: note network visualization.
- [ ] Graph filters: tags, folders, depth.
- [ ] Outline mode: notes as hierarchical blocks.
- [ ] Collapsible blocks.
- [ ] Block references and embeds.


## UX

- [x] Responsive layout: sidebar collapse, pane stacking, compact controls.
- [x] Works well on small windows: essential for desktop resizing.
- [ ] Resizable panels.
- [ ] Remember layout: restore sidebar widths and last open notes.
- [x] Light theme.
- [x] Dark theme.
- [x] Native file dialogs.
- [ ] Native context menus.
- [ ] Global shortcuts: optional.
- [ ] Tray icon / background mode: probably unnecessary for MVP.

## File Safety & Reliability

- [ ] File watching: detect external file changes.
- [ ] Conflict warning: if the file changed on disk while editing.
- [ ] Atomic writes: reduce corruption risk.

## Media & Attachments

- [ ] Paste image from clipboard into vault assets folder.
- [ ] Drag-and-drop attachments.
- [ ] Attachment folder settings.
- [ ] Image resize/display controls.

## Settings

- [ ] Vault settings: default note location, attachments folder, templates folder.
- [ ] Editor settings: font size, line width, tab size, spellcheck.
- [x] Theme settings.
- [ ] Hotkey settings.
- [ ] Link behavior settings: new note creation rules.
- [ ] Advanced markdown rendering settings.
- [ ] Export/import settings: later.

## Accessibility

- [ ] Keyboard navigation everywhere.
- [ ] Visible focus states.
- [ ] Screen reader friendly structure.
- [ ] Adjustable font sizes.
- [ ] High contrast theme.
- [ ] Reduced motion option.

## Telemetry / Privacy

- [ ] No telemetry by default.
- [ ] No cloud dependency.
- [ ] Local-first data model.

## Open Source / Project Hygiene

- [ ] Clear file format guarantees: notes remain portable.
- [ ] Documented folder structure.
- [ ] Stable markdown conventions.
- [ ] Cross-platform builds: Linux, macOS, Windows.
- [ ] Automated tests for parsing, link resolution, file ops.
- [ ] License: MIT.
- [ ] Contribution guide: later, once the base is stable.
