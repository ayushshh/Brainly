import { CopyIcon } from "../../icons/CopyIcons";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./button";

interface Share{
    onShare: boolean;
    onUpdate: () => void; 
}

export function ShareBrain({onShare, onUpdate}: Share) {
    return (
        <div>
            {onShare && <div className="w-screen h-screen left-0 top-0 bg-slate-500 opacity-60 fixed flex justify-center">
                <div className="flex justify-center flex-col">
                    <span className="bg-white opacity-100 h-72 w-110 rounded-md ">
                        <div className="flex justify-between p-4">
                            <div className="text-xl font-medium text-black">
                                Share Your Second Brain
                            </div>
                            <div className="cursor-pointer" onClick={onUpdate}>
                                <CrossIcon />
                            </div>
                        </div>
                        <div className="text-gray-500 p-4">
                            Share your entire collection of notes, documents, tweets, and videos with others. They'll be able to import your content into their own Second Brain.
                        </div>
                        <div className="p-4 flex justify-center align-middle">
                            <Button startIcon={<CopyIcon />} text="Share Brain" size="xl" variant="primary"/>
                        </div>
                        <div className="flex align-middle justify-center cursor-pointer">
                            {/* here api call will be done*/}
                            3 Items will be shared
                        </div>
                    </span>
                </div>
            </div>}
        </div> 
    )
}