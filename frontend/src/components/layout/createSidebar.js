import { createFolderTree } from "./createFolderTree";

export function createSidebar(state) {
    return `
        <aside class="sidebar">
            <div class="sidebar__section">
                <div class="sidebar__nav" aria-label="Sidebar navigation">
                    <button class="sidebar__icon-button" type="button" data-action="open-home" aria-label="Open home">
                        <span class="sidebar__icon-mark">N</span>
                    </button>
                    <button class="sidebar__icon-button" type="button" data-action="open-settings" aria-label="Open settings">
                        <span class="sidebar__icon-mark sidebar__icon-mark--secondary">S</span>
                    </button>
                </div>
            </div>
            <div class="sidebar__section sidebar__section--tree">
                ${createFolderTree(state.notes, state.activeTab)}
            </div>
        </aside>
    `;
}
