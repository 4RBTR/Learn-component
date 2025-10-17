import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
};

const baseClasses = "text-sm rounded-md py-2 px-4 font-bold transition-colors duration-200 ease-in-out";

// --- SOLID BUTTONS ---
export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
    return (<button className={`${baseClasses} bg-green-600 text-white hover:bg-green-700 ${className}`} type={type} onClick={onClick}>{children}</button>);
};
export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
    return (<button className={`${baseClasses} bg-yellow-500 text-white hover:bg-yellow-600 ${className}`} type={type} onClick={onClick}>{children}</button>);
};
export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
    return (<button className={`${baseClasses} bg-red-600 text-white hover:bg-red-700 ${className}`} type={type} onClick={onClick}>{children}</button>);
};
export const ButtonSuccessOutline = ({ children, type, onClick, className }: Props) => {
    return (<button className={`${baseClasses} bg-purple-600 text-white hover:bg-purple-700 hover:text-white ${className}`} type={type} onClick={onClick}>{children}</button>);
};
export const ButtonDangerOutline = ({ children, type, onClick, className }: Props) => {
    return (<button className={`${baseClasses} bg-blue-600 text-white hover:bg-blue-700 hover:text-white ${className}`} type={type} onClick={onClick}>{children}</button>);
};
export const ButtonInfoOutline = ({ children, type, onClick, className }: Props) => {
    return (<button className={`${baseClasses} bg-blue-400 text-white hover:bg-blue-500 hover:text-white ${className}`} type={type} onClick={onClick}>{children}</button>);
};