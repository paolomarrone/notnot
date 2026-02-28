const themeStorageKey = "notnot-theme";

function getInitialTheme() {
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function createAppState() {
    return {
        vaultName: "test-vault",
        vaultPath: "",
        notes: [],
        openNoteIds: [],
        activeTab: "home",
        activePanel: "edit",
        theme: getInitialTheme(),
        sidebarOpen: false,
        themeStorageKey,
    };
}
