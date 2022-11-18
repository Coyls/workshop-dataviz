import React from "react";


type GraphButtonProps = {
    label: string,
}

export function GraphButton({label}:GraphButtonProps){
    return <button className="bg-[#141414] text-[#FCF6FF] rounded-full py-2 px-8">
        {label}
    </button>
}
