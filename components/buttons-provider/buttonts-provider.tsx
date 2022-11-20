import { createContext, ReactNode, useContext, useState } from "react";

export interface ButtonsContextInterface {
  switchButtons: GraphTypeBus;
  switchButtonsBuilding: GraphTypeBuilding;
  setGraphType: (type: GraphTypeBus) => void;
  setGraphTypeBuilding: (type: GraphTypeBuilding) => void;
}

export enum GraphTypeBus {
  TIME = "TIME",
  DISTANCE = "DISTANCE",
}

export enum GraphTypeBuilding {
  BUS = "BUS",
  METRO = "METRO",
}

const ButtonsCtx = createContext<ButtonsContextInterface>(
  {} as ButtonsContextInterface
);

export const ButtonsProvider = ({ children }: { children?: ReactNode }) => {
  const [switchButtons, setSwitchButtons] = useState<GraphTypeBus>(
    GraphTypeBus.TIME
  );

  const [switchButtonsBuilding, setSwitchButtonsBuilding] =
    useState<GraphTypeBuilding>(GraphTypeBuilding.BUS);

  const setGraphType = (type: GraphTypeBus) => {
    setSwitchButtons(type);
    console.log("type", type);
  };

  const setGraphTypeBuilding = (type: GraphTypeBuilding) => {
    setSwitchButtonsBuilding(type);
  };

  return (
    <ButtonsCtx.Provider
      value={{
        switchButtons,
        setGraphType: (type) => setGraphType(type),
        switchButtonsBuilding,
        setGraphTypeBuilding: (type) => setGraphTypeBuilding(type),
      }}
    >
      {children}
    </ButtonsCtx.Provider>
  );
};

export const useButtons = () => useContext(ButtonsCtx);
