import "./style.css";

import { createAppState } from "./app/createAppState";
import { bindAppEvents } from "./app/bindAppEvents";
import { loadDefaultVault } from "./app/loadDefaultVault";
import { renderApp } from "./app/renderApp";

const appElement = document.querySelector("#app");
const appState = createAppState();

const refresh = () => {
    renderApp(appElement, appState);
};

bindAppEvents(appElement, appState, refresh);
refresh();
void loadDefaultVault(appState, refresh);
