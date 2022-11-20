import {
  GraphTypeBus,
  useButtons,
} from "../../buttons-provider/buttonts-provider";
import cls from "classnames";

type GraphButtonProps = {
  label: string;
  type: GraphTypeBus;
};

export function GraphButtonBus({ label, type }: GraphButtonProps) {
  const { switchButtons, setGraphType } = useButtons();

  const isActive = type === switchButtons;

  const className = cls(
    isActive ? "bg-[#141414] text-[#FCF6FF]" : "text-[#141414]",
    "border-2 border-[#141414] rounded-full py-2 px-6"
  );

  return (
    <button onClick={() => setGraphType(type)} className={className}>
      {label}
    </button>
  );
}
