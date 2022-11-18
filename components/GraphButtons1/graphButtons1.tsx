import React from "react";
import { GraphButton } from "../GraphButton/graphButton";

export function GraphButtons1({}){
    return <div className="flex gap-3">
        <GraphButton label="nombre / temps" />
        <GraphButton label="nombre / distance" outline/>
    </div>
}