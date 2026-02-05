import type { ReactElement } from "react";
//svg stands for sclable vector graphics
interface ButtonProps{
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon?: ReactElement; //here it will be reactElement bsc it store react icon
    endIcon?: ReactElement;
    onClick : () => void;
};

const VariantStyle = {
    "primary" : "bg-[#5047e4] text-white",
    "secondary" : "bg-[#e1e7ff] text-[#5047e4]"

};

const sizeVariant = {
    "sm" : "text-sm py-1 px-2",
    "md" : "text-base py-2 px-4",
    "lg" : "text-lg py-4 px-6"
};

const defaultStyle = "rounded-md mt-3 flex gap-2 hover:cursor-pointer item-center justify-center"

export const Button = (props: ButtonProps) => {
    return (
        <>
            <button className={`${defaultStyle} ${VariantStyle[props.variant]} ${sizeVariant[props.size]}`}>{props.startIcon} {props.text} {props.endIcon}</button>
        </>
    )
}