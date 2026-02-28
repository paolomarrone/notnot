import { escapeHtml } from "../../lib/escapeHtml";

function createPinnedCard(note) {
    return `
        <button class="card card--note" type="button" data-action="open-note" data-note-id="${note.id}">
            <span class="card__eyebrow">Pinned</span>
            <span class="card__title">${escapeHtml(note.title)}</span>
            <span class="card__meta">${escapeHtml(note.updatedAt)}</span>
        </button>
    `;
}

function createRecentRow(note) {
    return `
        <button class="list-row" type="button" data-action="open-note" data-note-id="${note.id}">
            <span class="list-row__title">${escapeHtml(note.title)}</span>
            <span class="list-row__meta">${escapeHtml(note.path)}</span>
        </button>
    `;
}

export function createHomePanel(state) {
    const pinnedNotes = state.notes.filter((note) => note.pinned);
    const recentNotes = state.notes.slice(0, 5);
    const vaultMessage = state.vaultPath
        ? `Loaded from ${escapeHtml(state.vaultName)}.`
        : "Pick a folder to start reading real markdown files.";

    return `
        <section class="home-panel">
            <div class="hero">
                <div class="hero__eyebrow">Desktop-first markdown notes</div>
                <h1 class="hero__title">A quiet workspace for plain-text thinking.</h1>
                <p class="hero__copy">
                    ${vaultMessage}
                </p>
                <button class="hero__action" type="button" data-action="open-vault">Open a vault</button>
            </div>
            <section class="panel-section">
                <div class="panel-section__title">Pinned notes</div>
                <div class="card-grid">
                    ${pinnedNotes.map(createPinnedCard).join("")}
                </div>
            </section>
            <section class="panel-section">
                <div class="panel-section__title">Recent notes</div>
                <div class="list-panel">
                    ${recentNotes.map(createRecentRow).join("")}
                </div>
            </section>
        </section>
    `;
}
