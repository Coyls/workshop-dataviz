import {
  GraphTypeBus,
  useButtons,
} from "../../buttons-provider/buttonts-provider";
import cls from "classnames";
import { GraphTypeBuilding } from "../../buttons-provider/buttonts-provider";

type GraphButtonBuildingProps = {
  label: string;
  type: GraphTypeBuilding;
};

export function GraphButtonBuilding({ label, type }: GraphButtonBuildingProps) {
  const { switchButtonsBuilding, setGraphTypeBuilding } = useButtons();

  const isActive = type === switchButtonsBuilding;

  const className = cls(
    isActive ? "bg-[#141414] text-[#FCF6FF]" : "text-[#141414]",
    "border-2 border-[#141414] rounded-full py-2 px-6"
  );

  return (
    <button onClick={() => setGraphTypeBuilding(type)} className={className}>
      {label}
    </button>
  );
}
