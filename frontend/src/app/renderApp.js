import { createAppFrame } from "../components/layout/createAppFrame";

export function renderApp(rootElement, state) {
    rootElement.innerHTML = createAppFrame(state);
}
