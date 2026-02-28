import { escapeHtml } from "../../lib/escapeHtml";

function createNode(name) {
    return {
        name,
        folders: new Map(),
        notes: [],
    };
}

function buildTree(notes) {
    const root = createNode("");

    for (const note of notes) {
        const parts = note.path.split("/");
        const fileName = parts.pop();
        let cursor = root;

        for (const part of parts) {
            if (!cursor.folders.has(part)) {
                cursor.folders.set(part, createNode(part));
            }

            cursor = cursor.folders.get(part);
        }

        cursor.notes.push({
            id: note.id,
            title: note.title,
            fileName,
        });
    }

    return root;
}

function renderFolders(node, depth, activeTab) {
    const folderMarkup = Array.from(node.folders.values())
        .sort((left, right) => left.name.localeCompare(right.name))
        .map((folder) => {
            return `
                <div class="tree__group">
                    <div class="tree__folder" style="--tree-depth:${depth}">${escapeHtml(folder.name)}</div>
                    ${renderFolders(folder, depth + 1, activeTab)}
                </div>
            `;
        })
        .join("");

    const noteMarkup = node.notes
        .sort((left, right) => left.title.localeCompare(right.title))
        .map((note) => {
            const className = note.id === activeTab ? "tree__note tree__note--active" : "tree__note";

            return `
                <button class="${className}" style="--tree-depth:${depth}" type="button" data-action="open-note" data-note-id="${note.id}">
                    ${escapeHtml(note.title)}
                </button>
            `;
        })
        .join("");

    return `${folderMarkup}${noteMarkup}`;
}

export function createFolderTree(notes, activeTab) {
    const tree = buildTree(notes);
    const treeMarkup = renderFolders(tree, 0, activeTab);

    return `
        <div class="tree">
            ${treeMarkup || '<div class="sidebar__hint">No markdown files found.</div>'}
        </div>
    `;
}
