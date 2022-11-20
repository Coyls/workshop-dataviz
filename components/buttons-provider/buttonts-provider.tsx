import { createContext, ReactNode, useContext, useState } from "react";

export interface ButtonsContextInterface {
  switchButtons: GraphType;
  setGraphType: (type: GraphType) => void;
}

export enum GraphType {
  TIME = "TIME",
  DISTANCE = "DISTANCE",
}

const ButtonsCtx = createContext<ButtonsContextInterface>(
  {} as ButtonsContextInterface
);

export const ButtonsProvider = ({ children }: { children?: ReactNode }) => {
  const [switchButtons, setSwitchButtons] = useState<GraphType>(GraphType.TIME);

  const setGraphType = (type: GraphType) => {
    setSwitchButtons(type);
  };

  return (
    <ButtonsCtx.Provider
      value={{ switchButtons, setGraphType: (type) => setGraphType(type) }}
    >
      {children}
    </ButtonsCtx.Provider>
  );
};

export const useButtons = () => useContext(ButtonsCtx);
