import { GraphType } from "../buttons-provider/buttonts-provider";
import { GraphButtonBuilding } from "./GraphButtonBuilding/graphButtonBuilding";

// export interface GraphButtons1Props {}

export function GraphButtonsBuilding() {
  return (
    <div className="flex gap-3">
      <GraphButtonBuilding type={GraphType.TIME} label="nombre / temps" />
      <GraphButtonBuilding
        type={GraphType.DISTANCE}
        label="nombre / distance"
      />
    </div>
  );
}
