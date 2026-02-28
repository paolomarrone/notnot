import { createSidebar } from "./createSidebar";
import { createTabs } from "./createTabs";
import { createHomePanel } from "../workspace/createHomePanel";
import { createNotePanel } from "../workspace/createNotePanel";
import { createSettingsPanel } from "../workspace/createSettingsPanel";

function getOpenNotes(state) {
    return state.openNoteIds
        .map((id) => state.notes.find((note) => note.id === id))
        .filter(Boolean);
}

function createWorkspace(state) {
    if (state.activeTab === "home") {
        return createHomePanel(state);
    }

    if (state.activeTab === "settings") {
        return createSettingsPanel(state);
    }

    const activeNote = state.notes.find((note) => note.id === state.activeTab);

    if (!activeNote) {
        return createHomePanel(state);
    }

    return createNotePanel(activeNote, state.activePanel);
}

export function createAppFrame(state) {
    const appClassName = state.sidebarOpen
        ? "app-shell app-shell--sidebar-open"
        : "app-shell";

    return `
        <div class="${appClassName}" data-theme="${state.theme}">
            ${createSidebar(state)}
            <div class="workspace-shell">
                ${createTabs(getOpenNotes(state), state.activeTab)}
                <main class="workspace">${createWorkspace(state)}</main>
            </div>
        </div>
    `;
}
