import { Document } from "../../icons/Documents";
import { Twitter } from "../../icons/Twiter";
import { VideoIcon } from "../../icons/Yoututbe";
import { BinIcon } from "../../icons/BinIcon";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps{
    link : string;
    type: "twitter" | "Youtube" | "Documents";
    title : string;
    tags : string;
}

export function Card(prop : CardProps){
    return (
        <>
            <div className="bg-white w-72 rounded-md p-5 m-5 h-96 shadow">
                <div className="flex justify-between align-middle">
                    <div className="flex font-medium text-2xl text-gray-700 ">
                        <div className="pr-3 pt-1">
                            {prop.type === "twitter" ? (<Twitter />) : prop.type === "Youtube" ? (<VideoIcon />) : <Document />}
                        </div>
                        {prop.title}
                    </div>
                    <div className="flex text-gray-400 ml-auto pt-1">
                        <div className="pr-5">
                            {<BinIcon/>}
                        </div>
                        {<ShareIcon />}
                    </div>
                </div>
                <div>
                    {prop.link}

                </div>
            </div>
        </>
    )
}