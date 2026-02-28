import { escapeHtml } from "../../lib/escapeHtml";

function createSidebarToggle() {
    return `
        <button class="tabs__menu" type="button" data-action="toggle-sidebar" aria-label="Toggle file tree">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;
}

function createNoteTab(note, activeTab) {
    const tabClassName = activeTab === note.id ? "tab tab--active" : "tab";
    const dirtyMarker = note.dirty ? "<span class='tab__dirty'>•</span>" : "";

    return `
        <div class="${tabClassName}">
            <button class="tab__open" type="button" data-action="open-tab" data-tab-id="${note.id}">
                ${escapeHtml(note.title)}${dirtyMarker}
            </button>
            <button class="tab__close" type="button" data-action="close-tab" data-tab-id="${note.id}" aria-label="Close ${escapeHtml(note.title)}">
                ×
            </button>
        </div>
    `;
}

export function createTabs(openNotes, activeTab) {
    return `
        <nav class="tabs" aria-label="Open notes">
            ${createSidebarToggle()}
            ${openNotes.map((note) => createNoteTab(note, activeTab)).join("")}
        </nav>
    `;
}
