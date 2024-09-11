"use client";
import { Provider } from "react-redux";
import { persist, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      {/*{children}*/}
      <PersistGate persistor={persist}>{children}</PersistGate>
    </Provider>
  );
};

export default Providers;
