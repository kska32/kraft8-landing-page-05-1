import react, {createContext} from "react";

let GlobalContext = createContext();

export const ContextProvider = GlobalContext.Provider;
export const ContextConsumer = GlobalContext.Consumer;