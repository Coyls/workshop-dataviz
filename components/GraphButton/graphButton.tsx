import React from "react";


type GraphButtonProps = {
    label: string,
    outline?: boolean
}

export function GraphButton({label, outline}:GraphButtonProps){
    if(outline)
        return <button className="text-[#141414] border-2 border-[#141414] rounded-full py-2 px-8">
            {label}
        </button>
    return <button className="bg-[#141414] text-[#FCF6FF] rounded-full py-2 px-8">
        {label}
    </button>
}
