import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface IPromptElementContext {
  promptElement: HTMLInputElement | null;
  setPromptElement: Dispatch<SetStateAction<HTMLInputElement | null>>;
}

export interface IPromptElementProviderProps {
  value: IPromptElementContext;
  children: JSX.Element;
}

export const initialContext: IPromptElementContext = {
  promptElement: null,
  setPromptElement: (): void => {},
};

const PromptElementContext =
  createContext<IPromptElementContext>(initialContext);

export const PromptElementProvider = (props: IPromptElementProviderProps) => {
  const { value, children } = props;

  return (
    <PromptElementContext.Provider value={value}>
      {children}
    </PromptElementContext.Provider>
  );
};

export function usePromptElementContext() {
  return useContext(PromptElementContext);
}
