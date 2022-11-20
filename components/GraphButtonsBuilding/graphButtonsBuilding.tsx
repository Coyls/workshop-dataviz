import { GraphTypeBuilding } from "../buttons-provider/buttonts-provider";
import { GraphButtonBuilding } from "./GraphButtonBuilding/graphButtonBuilding";

export function GraphButtonsBuilding() {
  return (
    <div className="flex gap-3">
      <GraphButtonBuilding type={GraphTypeBuilding.BUS} label="Bus" />
      <GraphButtonBuilding type={GraphTypeBuilding.METRO} label="Metro" />
    </div>
  );
}
