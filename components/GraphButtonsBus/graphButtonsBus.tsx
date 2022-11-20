import { GraphType } from "../buttons-provider/buttonts-provider";
import { GraphButtonBus } from "./GraphButton/graphButtonBus";

// export interface GraphButtons1Props {}

export function GraphButtonsBus() {
  return (
    <div className="flex gap-3">
      <GraphButtonBus type={GraphType.TIME} label="nombre / temps" />
      <GraphButtonBus type={GraphType.DISTANCE} label="nombre / distance" />
    </div>
  );
}
