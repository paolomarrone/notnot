import { escapeHtml } from "../../lib/escapeHtml";

function applyInlineMarkdown(value) {
    let output = escapeHtml(value);

    output = output.replace(/\[\[([^[\]]+)\]\]/g, "<span class=\"wiki-link\">$1</span>");
    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\">$1</a>");
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    output = output.replace(/`([^`]+)`/g, "<code>$1</code>");

    return output;
}

function renderLine(line) {
    const trimmed = line.trim();

    if (trimmed === "") {
        return "";
    }

    if (trimmed.startsWith("### ")) {
        return `<h3>${applyInlineMarkdown(trimmed.slice(4))}</h3>`;
    }

    if (trimmed.startsWith("## ")) {
        return `<h2>${applyInlineMarkdown(trimmed.slice(3))}</h2>`;
    }

    if (trimmed.startsWith("# ")) {
        return `<h1>${applyInlineMarkdown(trimmed.slice(2))}</h1>`;
    }

    if (trimmed.startsWith("- [ ] ")) {
        return `<div class="task-item"><span class="task-item__box"></span><span>${applyInlineMarkdown(trimmed.slice(6))}</span></div>`;
    }

    if (trimmed.startsWith("- [x] ")) {
        return `<div class="task-item"><span class="task-item__box task-item__box--checked"></span><span>${applyInlineMarkdown(trimmed.slice(6))}</span></div>`;
    }

    if (trimmed.startsWith("- ")) {
        return `<div class="bullet-item">${applyInlineMarkdown(trimmed.slice(2))}</div>`;
    }

    if (trimmed.startsWith("> ")) {
        return `<blockquote>${applyInlineMarkdown(trimmed.slice(2))}</blockquote>`;
    }

    return `<p>${applyInlineMarkdown(trimmed)}</p>`;
}

export function renderMarkdown(markdown) {
    return markdown
        .split("\n")
        .map(renderLine)
        .join("");
}
