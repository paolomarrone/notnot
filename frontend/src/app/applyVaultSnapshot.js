export function applyVaultSnapshot(state, snapshot) {
    if (!snapshot || !snapshot.rootPath) {
        return false;
    }

    state.vaultName = snapshot.name;
    state.vaultPath = snapshot.rootPath;
    state.notes = snapshot.notes;
    state.openNoteIds = snapshot.notes[0] ? [snapshot.notes[0].id] : [];
    state.activeTab = snapshot.notes[0] ? snapshot.notes[0].id : "home";
    state.activePanel = "edit";
    state.sidebarOpen = false;

    return true;
}
