import { LoadDefaultVault } from "../../wailsjs/go/main/App";
import { applyVaultSnapshot } from "./applyVaultSnapshot";

export async function loadDefaultVault(state, refresh) {
    try {
        const snapshot = await LoadDefaultVault();
        const didLoad = applyVaultSnapshot(state, snapshot);

        if (didLoad) {
            refresh();
        }
    } catch (error) {
        console.error(error);
    }
}
