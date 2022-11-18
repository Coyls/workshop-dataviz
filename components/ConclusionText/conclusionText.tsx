import React from "react";
import { Highlighter } from "../Highlighter/hightlighter";

export function ConclusionText(){
    return <div className="w-full flex justify-center mt-[250px]">
        <div className="flex flex-col w-3/5">
            <p className="font-['Eyra-500ExtraBold'] text-[56px] tracking-normal">
                <Highlighter> On en est où du coup ? </Highlighter>
            </p>
            <p className="font-['Eyra-400Light] text-[28px] tracking-tight leading-8 mt-6">
                Il existe de véritables freins à l’usage des transports. Malgré l’évolution des infrastructures, les services (entretien des transports et accompagnement) ne sont pas toujours à la hauteur de la demande et des besoins.
            </p>
            <p className="font-['Eyra-400Bold] text-[36px] font-bold mt-12 leading-8">
                Face à ces freins, des solutions continuent de se développer.
            </p>
            <p className="font-['Eyra-400Light] text-[28px] tracking-tight leading-8 mt-11 mb-[200px]">
                On peut notamment citer les transports à la demande proposés par les AOM (Autorités Organisatrices de Mobilité, comme la RATP). <br />
                Ces initiatives permettent aux personnes handicapés physique de moins dépendre des infrastructures souvent défaillantes ou source de stress et de leur permettre un gain d’autonomie au quotidien.
            </p>
        </div>
    </div>
}