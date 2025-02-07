import { createContext, useContext, useState } from "react";


const SidePanelContext = createContext();

export const SidePanelProvider = ({ children }) =>{
    const [panel, setPanel] = useState(null);

    const openPanel = (panelName) => setPanel(panelName);
    const closePanel = () => setPanel(null);

    return (
        <SidePanelContext.Provider value={{ panel, openPanel, closePanel }} >
            {children}
        </SidePanelContext.Provider>
    )
}

export const useSidePanel = () => useContext(SidePanelContext);