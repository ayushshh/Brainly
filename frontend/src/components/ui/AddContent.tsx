// import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./button";
// import { useRef } from "react";

interface ContentType{
    open : boolean;
    onClose : () => void;
}

//controlled component is that when user is controlling/using the component

export function CreateContent(prop : ContentType){

    return (
        <div>
            {prop.open && <div className="w-screen h-screen top-0 left-0 bg-slate-500 fixed opacity-60 flex justify-center">
                <div className="flex justify-center flex-col">
                   <span className="bg-white opacity-100 h-72 w-96 rounded-md">
                        <div className="flex justify-end pr-6 pt-5">
                            <div className="cursor-pointer" onClick={prop.onClose}>
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Enter the Content title" />
                            <input type="text" placeholder="Paste your Content/link"/>
                            <input type="text" placeholder="Enter tags"/>
                            <div>
                                <Button variant="primary" size="md" text="Submit Content" onClick={() => {}}/>
                            </div>
                        </div>
                    </span> 
                </div>
                
            </div>}
        </div>
    )
}