import { createContext, useContext } from "react";
import { CryptoStore } from "./crypto-store";

export const rootStoreContext = createContext({
  cryptoStore: new CryptoStore(),
});

export const useStores = () => useContext(rootStoreContext);
