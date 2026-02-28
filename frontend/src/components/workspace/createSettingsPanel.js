import { escapeHtml } from "../../lib/escapeHtml";

function createThemeButton(label, theme, activeTheme) {
    const className =
        theme === activeTheme
            ? "segmented-control__button segmented-control__button--active"
            : "segmented-control__button";

    return `
        <button class="${className}" type="button" data-action="set-theme" data-theme="${theme}">
            ${label}
        </button>
    `;
}

export function createSettingsPanel(state) {
    return `
        <section class="settings-panel">
            <header class="settings-panel__header">
                <div class="hero__eyebrow">Settings</div>
                <h1 class="settings-panel__title">Workspace preferences</h1>
                <p class="settings-panel__copy">
                    Keep the main chrome focused on notes. Theme selection and workspace details live here.
                </p>
            </header>
            <section class="settings-group">
                <div class="settings-group__label">Theme</div>
                <div class="segmented-control" role="tablist" aria-label="Theme selection">
                    ${createThemeButton("Light", "light", state.theme)}
                    ${createThemeButton("Dark", "dark", state.theme)}
                </div>
            </section>
            <section class="settings-group">
                <div class="settings-group__label">Layout</div>
                <div class="settings-group__value">Compact spacing is enabled by default for dense note browsing.</div>
            </section>
            <section class="settings-group">
                <div class="settings-group__label">Vault</div>
                <div class="settings-group__value">${escapeHtml(state.vaultPath || "No vault selected yet.")}</div>
            </section>
        </section>
    `;
}
