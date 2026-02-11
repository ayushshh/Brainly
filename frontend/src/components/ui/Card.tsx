import { Document } from "../../icons/Documents";
import { Twitter } from "../../icons/Twiter";
import { VideoIcon } from "../../icons/Yoututbe";
import { BinIcon } from "../../icons/BinIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { HashTag } from "../../icons/Hashtag";


interface CardProps {
  link: string;
  type: "twitter" | "Youtube" | "Documents";
  title: string;
  tags: string[];
}

export function Card(prop: CardProps) {
  return (
    <div className="bg-white w-72 rounded-lg p-5 m-5 h-auto shadow-md flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center font-semibold text-xl text-gray-700">
          <div className="pr-3">
            {prop.type === "twitter" ? (
              <Twitter />
            ) : prop.type === "Youtube" ? (
              <VideoIcon />
            ) : (
              <Document />
            )}
          </div>
          <div className="pb-1">
            {prop.title}
          </div>
        </div>
        <div className="flex text-gray-400 space-x-4">
          <BinIcon />
          <ShareIcon />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 text-sm text-gray-600 whitespace-pre-wrap wrap-break-words grow">
        {prop.type === "twitter" && prop.link ? (
            <blockquote className="twitter-tweet">
                <a href={prop.link}></a> 
            </blockquote>
        ) : prop.type === "Youtube" && prop.link ? (
          <iframe className="w-full" src={prop.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        ) : prop.type === "Documents" && prop.link ? (
          <div>{prop.link}</div>
        ) : null}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {prop.tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 text-[#5047e4] px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-300 transition"
          >
            <div className="mr-1">
                <HashTag  />
            </div>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}