import { renderMarkdown } from "../markdown/renderMarkdown";
import { escapeHtml } from "../../lib/escapeHtml";

function createToolbar(activePanel) {
    const editClassName =
        activePanel === "edit" ? "segmented-control__button segmented-control__button--active" : "segmented-control__button";
    const previewClassName =
        activePanel === "preview" ? "segmented-control__button segmented-control__button--active" : "segmented-control__button";

    return `
        <div class="note-toolbar">
            <div class="note-toolbar__meta">Single-pane mode</div>
            <div class="segmented-control" role="tablist" aria-label="Editor mode">
                <button class="${editClassName}" type="button" data-action="switch-panel" data-panel="edit">Edit</button>
                <button class="${previewClassName}" type="button" data-action="switch-panel" data-panel="preview">Preview</button>
            </div>
        </div>
    `;
}

function createEditor(note) {
    return `
        <label class="editor-panel">
            <span class="sr-only">Markdown editor</span>
            <textarea class="editor-panel__input" data-role="editor-input" spellcheck="false">${escapeHtml(note.content)}</textarea>
        </label>
    `;
}

function createPreview(note) {
    return `
        <div class="preview-panel">
            ${renderMarkdown(note.content)}
        </div>
    `;
}

function createTagList(note) {
    return note.tags
        .map((tag) => `<span class="tag-chip">${escapeHtml(tag)}</span>`)
        .join("");
}

export function createNotePanel(note, activePanel) {
    return `
        <section class="note-panel">
            <header class="note-header">
                <div>
                    <div class="note-header__eyebrow">${escapeHtml(note.path)}</div>
                    <h1 class="note-header__title">${escapeHtml(note.title)}</h1>
                </div>
                <div class="note-header__tags">${createTagList(note)}</div>
            </header>
            ${createToolbar(activePanel)}
            ${activePanel === "edit" ? createEditor(note) : createPreview(note)}
        </section>
    `;
}
