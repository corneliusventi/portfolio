import { createContext, useContext } from "react";

const PromptElementContext = createContext();

export function PromptElementProvider(props) {
  const { value, children } = props;

  return (
    <PromptElementContext.Provider value={value}>
      {children}
    </PromptElementContext.Provider>
  );
}

export function usePromptElementContext() {
  return useContext(PromptElementContext);
}
