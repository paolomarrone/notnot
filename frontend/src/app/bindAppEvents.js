import { OpenVault } from "../../wailsjs/go/main/App";
import { applyVaultSnapshot } from "./applyVaultSnapshot";

export function bindAppEvents(rootElement, state, refresh) {
    const setTheme = (theme) => {
        if (theme !== "light" && theme !== "dark") {
            return;
        }

        state.theme = theme;
        window.localStorage.setItem(state.themeStorageKey, state.theme);
        refresh();
    };

    const openVaultFromPicker = async () => {
        try {
            const snapshot = await OpenVault();
            const didLoad = applyVaultSnapshot(state, snapshot);

            if (didLoad) {
                refresh();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const toggleSidebar = () => {
        state.sidebarOpen = !state.sidebarOpen;
        refresh();
    };

    const openTab = (tabId) => {
        state.activeTab = tabId;
        state.sidebarOpen = false;
        refresh();
    };

    const openNote = (noteId) => {
        if (!state.openNoteIds.includes(noteId)) {
            state.openNoteIds.push(noteId);
        }

        state.activeTab = noteId;
        state.sidebarOpen = false;
        refresh();
    };

    const closeTab = (noteId) => {
        state.openNoteIds = state.openNoteIds.filter((id) => id !== noteId);

        if (state.openNoteIds.length === 0) {
            state.activeTab = "home";
        } else if (state.activeTab === noteId) {
            state.activeTab = state.openNoteIds[state.openNoteIds.length - 1];
        }

        refresh();
    };

    const updateActiveNote = (content) => {
        if (state.activeTab === "home") {
            return;
        }

        const note = state.notes.find((item) => item.id === state.activeTab);

        if (!note) {
            return;
        }

        note.content = content;
        note.dirty = true;
        note.updatedAt = "Just now";
    };

    const switchPanel = (panel) => {
        state.activePanel = panel;
        refresh();
    };

    rootElement.addEventListener("click", (event) => {
        const actionElement = event.target.closest("[data-action]");

        if (!actionElement) {
            return;
        }

        const { action, panel, noteId, tabId, theme } = actionElement.dataset;

        if (action === "toggle-sidebar") {
            toggleSidebar();
            return;
        }

        if (action === "open-home") {
            openTab("home");
            return;
        }

        if (action === "open-settings") {
            openTab("settings");
            return;
        }

        if (action === "open-vault") {
            void openVaultFromPicker();
            return;
        }

        if (action === "open-note" && noteId) {
            openNote(noteId);
            return;
        }

        if (action === "open-tab" && tabId) {
            openTab(tabId);
            return;
        }

        if (action === "close-tab" && tabId) {
            closeTab(tabId);
            return;
        }

        if (action === "switch-panel" && panel) {
            switchPanel(panel);
            return;
        }

        if (action === "set-theme" && theme) {
            setTheme(theme);
        }
    });

    rootElement.addEventListener("input", (event) => {
        const inputElement = event.target.closest("[data-role='editor-input']");

        if (!inputElement) {
            return;
        }

        updateActiveNote(inputElement.value);
    });
}
