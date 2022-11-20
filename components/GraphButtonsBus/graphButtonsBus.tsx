import { GraphTypeBus } from "../buttons-provider/buttonts-provider";
import { GraphButtonBus } from "./GraphButton/graphButtonBus";

export function GraphButtonsBus() {
  return (
    <div className="flex gap-3">
      <GraphButtonBus type={GraphTypeBus.TIME} label="nombre / temps" />
      <GraphButtonBus type={GraphTypeBus.DISTANCE} label="nombre / distance" />
    </div>
  );
}
